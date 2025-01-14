const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    linkOrder: String,
    size : String,
    quantity : Number,
    realquantity: Number,
    address_ship : String,
    image : String,
    data_order : String,
    nation : String,
    idShiper : mongoose.Types.ObjectId,
    nameProduct : String,
    price : Number,
    status : Number,
    idProduct: String,
    colorProduct: String,
    trackDas: String,
    trackFedex: String,
    idOrder: String,
    email: String,
    pay_price: Number,
    nameShiper: String,
})
module.exports = mongoose.model("order", orderSchema)