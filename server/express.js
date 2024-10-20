import express from 'express';
import Template from '../template.js';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser' 
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(compress());
app.use(cors());
app.use(helmet());

app.get('/',(req,res)=>{
    res.status(200).send(Template())
})


export default app
