import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProductByID } from "../Controllers/productController.js";

export const productRouter = new Router()

productRouter.get("/products",getAllProducts)
productRouter.get("/products/:id",getProductByID)
productRouter.post("/products",addProduct)
productRouter.delete("/products/:id",deleteProduct)
