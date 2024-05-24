require('dotenv').config();

const pass = process.env.PASSWORD;
const atlasUrl = `mongodb+srv://vsjoshi772:${pass}@cluster0.ooewpol.mongodb.net/tiffin`;
const localUrl = "mongodb://localhost:27017/tiffin";

module.exports = { atlasUrl, localUrl };