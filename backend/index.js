import express from 'express';
import { PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import router from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors())

app.use('/books',router)

mongoose.connect(mongoDBURL).then(()=>{
    console.log("mongoDB is connected");
    app.listen(PORT,() => {
        console.log(`app is listening to port: ${PORT}`);
    });
}).catch(()=>{
    console.log("mongoDB is not connected");
})