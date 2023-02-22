const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
mongoose.set('strictQuery', false);
// console.log(process.env.DATABASE_URL)

mongoose.connect('mongodb+srv://Dipak9876:F65gTh7dodQDpqTB@cluster0.hjffz71.mongodb.net/studentapi?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection Successful")
}).catch(()=>{
    console.log("Connection fail")
})

module.exports = mongoose