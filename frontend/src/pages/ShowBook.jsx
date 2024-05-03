import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton.jsx'

const ShowBook = () => {

  const [book,setBook] = useState({});
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`).then((response)=>{
      console.log(response)
      setLoading(false)
      setBook(response.data)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>ShowBoook</h1>
      {loading ? (<Spinner/>):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl p-4 w-fit'>
          <div className='my-4'>
            <span className='tex-xl mr-4 text-gray-500'>Id</span>
            <span className=''>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='tex-xl mr-4 text-gray-500'>Author</span>
            <span className=''>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='tex-xl mr-4 text-gray-500'>Publish Year</span>
            <span className=''>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='tex-xl mr-4 text-gray-500'>Created Time</span>
            <span className=''>{new Date(book.createdAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook
