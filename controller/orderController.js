import Order from "../model/OrderModel.js"

export const createOrder = async (req, res) => {
    try{

        const order = await Order.create(req.body)

        res.json({
            message: "Order Placed",
            order
        })

    } catch(err) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
}