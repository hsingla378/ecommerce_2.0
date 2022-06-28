const getCategories = (req, res) => {
    return res.json({
        product: "electronic devices",
        status: 200
    })
}

module.exports = {getCategories}