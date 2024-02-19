const customerModel = require('../models/user.model')

const postCustomer = async (req, res) => {
    try {
        console.log(req.body)
        const customers = await customerModel.create(req.body);
        return res.status(201).send({
            success: true,
            message: "customer create successfully",
            customers
        })
    } catch (error) {
        return res.status(501).send({
            success: false,
            message: 'error while creating customer',
            error
        })
    }
}

module.exports = { postCustomer }