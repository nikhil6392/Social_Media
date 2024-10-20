import dotenv from 'dotenv'
dotenv.config()
const config ={
    PORT:process.env.PORT||3001,
    MONGODB_URI:process.env.MONGODB_URI,
}
export default config;