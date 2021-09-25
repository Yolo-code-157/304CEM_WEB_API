const Category = require('../models/categoryModel')
const Products = require('../models/productModel')

const categoryCtrl = {

getCategories : async (req,res) =>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
createCategory:async (req,res)=>{
    try {
        
        return res.json({msg: "admin detected, welcome to category"})
       
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},


}

module.exports = categoryCtrl