import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './connection/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js'


const app = express();
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended: true}))

app.use('/',Route);


const PORT = process.env.PORT || 8000;


Connection();

app.listen(PORT,()=> console.log(`Server is running! ${PORT}`));

DefaultData();
