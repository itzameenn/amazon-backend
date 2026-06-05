import axios from "axios"

export const createPaymentOrder = async (req, res) => {
  try {
    const { totalPrice, customerName, email, phone } = req.body

    const orderId = "order_" + Date.now()

    const requestBody = {
      order_id: orderId,
      order_amount: totalPrice,
      order_currency: "INR",
      customer_details: {
        customer_id: "user_" + Date.now(),
        customer_name: customerName,
        customer_email: email,
        customer_phone: phone
      }
    }

    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          "x-client-id": process.env.CF_APP_ID,
          "x-client-secret": process.env.CF_SECRET_KEY,
          "x-api-version": "2022-09-01"
        }
      }
    )

    res.json({
      orderId,
      paymentSessionId: response.data.payment_session_id
    })

  } catch (err) {
    console.log("CASHFREE ERROR:", err.response?.data || err.message)

    res.status(500).json({
      message: "Payment failed",
      error: err.response?.data || err.message
    })
  }
}