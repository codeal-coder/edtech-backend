const Razorpay = require("razorpay");
const dotenv = require("dotenv")
dotenv.config();
// console.log("key ",process.env.RAZORPAY_KEY);
// console.log("seceret ",process.env.RAZORPAY_SECERET);


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECERET,
});