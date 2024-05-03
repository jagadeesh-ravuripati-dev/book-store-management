import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import BackButton from '../components/BackButton'
import { useNavigate,useParams } from 'react-router-dom'


const DeleteBook = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDelete = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${id}`).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      alert('An error happend. Please check console')
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading?(<Spinner/>):(
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl'>Are you sure you want to delete the book?</h3>
          <button className='bg-red-500 rounded-xl p-4 m-8 text-white' onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook
