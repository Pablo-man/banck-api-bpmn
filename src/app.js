import express from "express"
import morgan from "morgan"
import router from "./routes/user.route.js"
import {connectDB} from "./db.js"

connectDB()
const app= express()

//SETTINGS
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, '*');
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})

app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port= 4000 || process.env.port

app.use(router)

app.listen(port, ()=>{
    console.log('aplication on port 4000')
})