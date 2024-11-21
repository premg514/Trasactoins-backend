const mongoose = require('mongoose')
const transactSchemaRules = {
    transaction_id: {
        type: Number,

        unique: true, // Ensure it's unique across documents
    },
    amount: {
        type: [Number, "amount should be in numbers"],
        required: true,
        validate: {
            validator: function () {
                return this.amount > 0
            },
            message: "amount should be greater than zero"
        }
    },
    status: {
        type: String,
        default: "PENDING"
    },
    transaction_type: {
        type: String,
        required: [true, "kindly should mention the type of your bank"],

    },
    user: {
        type: Number,
        required: [true, "Enter  your userID to transact your amount"]
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
}
const transactionSchema = new mongoose.Schema(transactSchemaRules)
const transactionModel = mongoose.model("transactionModel", transactionSchema)

module.exports = transactionModel