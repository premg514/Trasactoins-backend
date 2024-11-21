const createTransaction = function (Model) {
    return async function (req, res) {
        try {
            const transactData = req.body;
            if (transactData !== undefined) {
                const creating = await Model.create(transactData)
                res.status(200).json({
                    status: "success",
                    message: creating
                })
            } else {
                res.status(400).json({
                    status: "failure",
                    message: "Transaction failed!"
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
const getTransaction = function (Model) {
    return async function (req, res) {

        const query = req.query;

        if (Object.keys(query).length !== 0) {
            const userID = query.user_id

            const getting = await Model.findOne({ user: userID })
            if (getting) {
                res.status(200).json({
                    status: "success",
                    transactions: getting
                })
            } else {
                res.status(400).json({
                    status: "failure",
                    transactions: "Transactions are not found!"
                })
            }
        } else {
            const getting = await Model.find()
            if (getting.length > 0) {
                res.status(200).json({
                    status: "success",
                    transactions: getting
                })
            } else {
                res.status(400).json({
                    status: "failure",
                    transactions: "Transactions are not found!"
                })
            }
        }




    }
}
const updateTransactions = function (Model) {
    return async function (req, res) {
        const userID = req.params.user_id;
        const request = req.body;
        const key = Object.keys(request)[0]
        const value = request[key]
        const existedData = await Model.findOne({ user: userID })
        if (existedData[key] === value) {
            res.json({
                message: "Don't need to change any more."
            })
        } else {
            const updating = await Model.updateOne({ user: userID }, { $set: { [key]: value } })
            res.json({
                message: "Change updated!"
            })

        }

    }
}
module.exports = { createTransaction, getTransaction, updateTransactions }