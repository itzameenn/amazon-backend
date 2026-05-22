import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userEmail: String,
    
    customerName: String,
    phone: String,
    email: String,

    address: {
        house: String,
        city: String,
        state: String,
        pincode: String,
        country: String
    },

    products: Array,

    totalPrice: Number,

    status: {
        type: String,
        default: "pending"
    }

},  {
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema)

export default Order