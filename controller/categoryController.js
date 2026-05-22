import Category from "../model/CategoryModel.js"

export const updateCategory = async (req, res) => {
    const {id} = req.params
    const {category} = req.body

    await Category.findByIdAndUpdate(id, {category})
    res.send("Category Updated")
}

export const deleteCategory = async (req, res) => {
    const {id} = req.params

    await Category.findByIdAndDelete(id)
    res.send("Category Deleted")
}


export const CreateCategory=async (req,res)=>{
    const {category} = req.body

    await Category.create({
        category
    })

    res.send("Category Added")
}

export const getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id)
  res.json(category)
}

export const getCategories = async (req,res) => {
    const categories = await Category.find()
    res.json(categories)
}