import Order from "../model/OrderModel.js"

export const createOrder = async (req, res) => {
  try {

    const order = await Order.create(req.body)

    res.json({
      message: "Order Placed",
      order
    })

  } catch (err) {

    console.log("ORDER ERROR:", err)

    res.status(500).json({
      message: "something went wrong"
    })

  }
}

export const getOrders = async (req, res) => {
  try {

    const orders = await Order.find().sort({ createdAt: -1 })

    res.json(orders)

  } catch (err) {

    console.log("GET ORDERS ERROR:", err)

    res.status(500).send("Server Error")

  }
}

export const updateOrderStatus = async (req, res) => {
  try {

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      },
      {
        new: true
      }
    )

    res.json(updatedOrder)

  } catch (err) {

    console.log("UPDATE ORDER ERROR:", err)

    res.status(500).send("Server Error")

  }
}