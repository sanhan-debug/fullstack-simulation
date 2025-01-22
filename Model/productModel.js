import { Schema,model } from "mongoose";

const productSchema = new Schema({
        name:String,
        image:String,
        price:Number
})


export const Product = model('products',productSchema)