import express from 'express';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser' 
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
//it should be commented when building the code for production
// and it is only for development purpose
import devBundle from './devBundle.js';
const app = express()
//It should be commented when going in production phase 
// it is only for development purpose
devBundle.compile(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(compress());
app.use(cors());
app.use(helmet());

app.use('/',userRoutes)


app.use('/',authRoutes)

app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({"error":err.name + ": " + err.message})
    }else if(err){
        res.status(400).json({"error":err.name + ": " + err.message})
        console.log(err)
    }

})


export default app
