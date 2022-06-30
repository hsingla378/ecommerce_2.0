const categoryService = require("../services/categoryService")

const getCategories = async (req, res) => {
    const response = await categoryService.getAllCategories();
    // console.log(response)
    return res.json({
        product: "electronic devices",
        status: 200,
        data: response
    })
}

module.exports = {getCategories}