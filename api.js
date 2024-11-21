const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
app.use(express.json())

const Transactions = require('./routes/transactionRoutes')

const { DB_PASS } = process.env
mongoose.connect(`mongodb+srv://premg513:${DB_PASS}@cluster0.qhkmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then((connection) => console.log("mongoDB connection"))
    .catch(e => console.log(e))

app.use('/api/transactions',Transactions) // all routes are handle by routes folder

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})