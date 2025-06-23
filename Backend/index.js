import express from 'express';
import cors from 'cors'

const port =5000
const app=express();
app.use(cors())

app.get("/getData",(req,res)=>{
    res.send("Bytecity")
});

app.listen(5000, ()=>console.log(`App running on port ${port}`))


