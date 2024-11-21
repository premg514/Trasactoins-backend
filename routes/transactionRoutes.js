const express = require('express')

const { createTransactionHandler, getTransactionHandler, updateTransactHandler } = require('../controllers/transactionControllers')

const Transactions = express.Router()

Transactions.post("/", createTransactionHandler)//posting transaction
Transactions.get('/', getTransactionHandler)//this route can handle both get all transactions and get by id transaction also
Transactions.patch('/:user_id', updateTransactHandler)// this route can do update the given data on specific id
module.exports = Transactions;