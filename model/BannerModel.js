import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
})

export default mongoose.model("Banner", bannerSchema)