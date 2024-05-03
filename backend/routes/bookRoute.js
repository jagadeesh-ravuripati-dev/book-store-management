import express from 'express';
import { Book } from '../models/bookModels.js';
 
const router = express.Router();

//save a book in mongoDB
router.post('/',async (req,res) => {
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({
                message:'send all fields: title,author,publishYear',
            })
        }
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book = await Book.create(newBook)
        return res.status(200).send(book)
    } catch (error) {
        console.log(error.message);
        return res.status(234).send({message:error.message})
    }
})

//get all books in database
router.get('/',async(req,res) => {
    try {
        const books = await Book.find({});
        res.status(200).send({
            count:books.length,
            data:books,
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).send({message:'Book not found'})
    }
})

//getting book by id from database

router.get('/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({message:error.message})
    }
})

//update a book  by id
router.put('/:id',async (req, res) => {
    try {
        const {id} = req.params;
        const result =await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            res.status(404).send({message:'Book not Found'});
        }
        res.status(200).send({message:'Book updated succesfully'})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            message:error.message,
        })
    }
})

//deleting a book in database
router.delete('/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.status(400).send({message:'Book not found'});
        }
    res.status(200).send({message:'Book deleted successfully'})
    } catch (error) {
        console.log(error.message);
        res.status(404).send({message:error.message})
    }
})

export default router;