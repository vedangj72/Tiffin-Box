require('dotenv').config()
const pass = process.env.PASSWORD
const Url = `mongodb+srv://vsjoshi772:${pass}@cluster0.ooewpol.mongodb.net/tiffin`;
// console.log(Url);
module.exports = Url;