const { createTransaction, getTransaction, updateTransactions } = require('../utilities')
const transactionModel = require('../model/transactionsModel')
const createTransactionHandler = createTransaction(transactionModel)
const getTransactionHandler = getTransaction(transactionModel)
const updateTransactHandler = updateTransactions(transactionModel)
module.exports = { createTransactionHandler, getTransactionHandler, updateTransactHandler }