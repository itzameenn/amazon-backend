import Banner from "../model/BannerModel.js"

export const addBanner = async (req, res) => {
    const {product} = req.body

    const count = await Banner.countDocuments()

    if (count >= 3) {
        return res.status(400).send("3 banner ullu")
    }

    await Banner.create ({product})

    res.send("Banner add aayi")
}

export const getBanners = async (req, res) => {
    const banners = await Banner.find().populate("product")

    res.json(banners)
}

export const deleteBanner = async (req, res) => {
    const {id} = req.params

    await Banner.findByIdAndDelete(id)

    res.send("Banner poyi")
}