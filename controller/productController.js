import Product from "../model/ProductModel.js"

export const updateProduct = async (req, res) => {
  const { id } = req.params

if (req.body.offerPrice === undefined) {
  await Product.findByIdAndUpdate(id, {
    ...req.body,
    $unset: { offerPrice: "" }
  })
} else {
  await Product.findByIdAndUpdate(id, req.body)
}
  res.send("Product Updated")
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params

  await Product.findByIdAndDelete(id)
  res.send("Product Deleted")
}

export const getAllProducts = async (req,res)=>{
    const products = await Product.find().populate("category")
    res.json(products)
}

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
}

export const searchProducts = async (req, res) => {
    
    const { name } = req.query

    let filter = {}

    if (name) {
        filter.name = { $regex: name, $options: "i" }
    }

    const products = await Product.find(filter)
    
    res.json(products)

}

export const getProductsByCategory = async(req,res)=>{


    const {id}=req.params

    const products=await Product.find({
        category:id
    })

    res.json(products)
}

export const addProduct = async (req,res)=>{
    try{
        const {name, price, offerPrice, imageURL,category} = req.body

        await Product.create({
            name,
            price,
            offerPrice,
            imageURL,
            category
        })

        res.send("Product Added")
    }catch(err){
        console.log(err)
        res.status(500).send("server error")
    }
}