import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModel = ({ item, onClose }) => {
    return (
        <div onClick={onClose} className='fixed bg-black bg-opacity-60 top-0 bottom-0 left-0 z-50 right-0 flex justify-center items-center'>
            <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose onClick={onClose} className='absolute top-6 right-6 text-red-600 text-3xl cursor-pointer' />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{item.publishYear}</h2>
                <h4 className='my-2 text-gray-500'>{item._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-2xl text-red-300' />
                    <h2>{item.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{item.author}</h2>
                </div>
                <p className='mt-4'>Anything you want to show me</p>
                <p className='my-2'>It seems like you're referring to the event.stopPropagation() method in JavaScript. This method is used to stop the propagation of an event through the DOM (Document Object Model) hierarchy. When an event occurs on an element, it typically triggers handlers on that element and then bubbles up or captures down through its ancestors</p>
            </div>
        </div>
    )
}

export default BookModel
