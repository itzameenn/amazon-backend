import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import Account from "./model/AccountModel.js"
import Category from "./model/CategoryModel.js"
import Product from "./model/ProductModel.js"
import productRoutes from "./route/productRoutes.js"
import categoryRoutes from "./route/categoryRoutes.js"
import bannerRoutes from "./route/bannerRoute.js"
import accountRoutes from "./route/accountRoute.js"
import orderRoute from "./route/orderRoute.js"
import paymentRoute from "./route/paymentRoute.js"


const app = express()
const PORT = process.env.port || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

app.use("/users", accountRoutes)
app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/banners", bannerRoutes)
app.use("/orders", orderRoute)
app.use("/api/payment", paymentRoute)

app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:${PORT}/users`)
})

// ameen