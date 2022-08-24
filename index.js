import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

const Port = 4040

app.get("/", (req, res)=> res.send("my api "))

app.listen (PORT, () => {
    console.log(`listening on Port ${PORT}`)
})