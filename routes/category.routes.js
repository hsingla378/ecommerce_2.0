const CategoriesController = require("../controllers/category.controller")

const routes = (app) => {
    app.get("/ecom/categories", CategoriesController.getCategories )
}

module.exports = routes