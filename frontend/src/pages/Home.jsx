import React from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../home/BookCard.jsx'
import BookTable from '../home/BookTable.jsx'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showtype,setShowtype] = useState('table')
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/books').then((response) => {
      setBooks(response.data.data);
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowtype('table')}>
          Table
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowtype('card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl m-8'>BooksList</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-3xl text-sky-400' />
        </Link>
      </div>
      {loading ? (<Spinner />) : (
        showtype==='table' ? <BookTable books={books} /> :<BookCard books={books}/>
      )}
    </div>
  )
}

export default Home
