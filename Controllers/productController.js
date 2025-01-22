import { Product } from "../Model/productModel.js";


let addProduct = async (req, res) => {

    try {
        let newProduct = await Product.create(req.body)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error("addProduct", err)
        res.send(err).status(500)
    }
}

let getAllProducts = async (req, res) => {

    try {
        let products = await Product.find()
        res.send(products).status(200)
    } catch (err) {
        console.error("getAllProducts", err)
        res.send(err).status(500)
    }
}


let getProductByID = async (req, res) => {

    try {
        let newProduct = await Product.findById(req.params.id)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error("get by  id error", err)
        res.send(err).status(500)
    }
}

let deleteProduct = async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send("deleted element").status(200)
    } catch (err) {
        console.error("delete  error", err)
        res.send(err).status(500)
    }
}

export { addProduct, getAllProducts, getProductByID, deleteProduct }