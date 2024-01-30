const mongoose = require("mongoose")
require('dotenv').config();


//mongoose.connect("mongodb://localhost:27017/react-login-tut")
//mongoose.connect("mongodb+srv://purpNtharu:5z8qsgS3fzuyMIva@cluster0.dwo2kyv.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("mongodb connected")
})
.catch((error) => {
    console.log("failed.", error)
})


const newSchema = new mongoose.Schema({
    letter:{
        type:String,
        reqquired:true
    },
    name:{
        type:String,
        reqquired:true
    },
    year:{
        type:String,
        reqquired:true
    },
    production:{
        type:String,
        reqquired:true
    },
    category:{
        type:String,
        reqquired:true
    },
    poster:{
        type:String,
        reqquired:true
    },
    description:{
        type:String,
        reqquired:true
    },
    wstatus:{
        type:String,
        reqquired:true
    },
    myrank:{
        type:String,
        reqquired:true
    }
})


const newTVSchema = new mongoose.Schema({
    letter:{
        type:String,
        reqquired:true
    },
    name:{
        type:String,
        reqquired:true
    },
    year:{
        type:String,
        reqquired:true
    },
    production:{
        type:String,
        reqquired:true
    },
    category:{
        type:String,
        reqquired:true
    },
    poster:{
        type:String,
        reqquired:true
    },
    description:{
        type:String,
        reqquired:true
    },
    wstatus:{
        type:String,
        reqquired:true
    },
    myrank:{
        type:String,
        reqquired:true
    }
})

const tvdata = mongoose.model("tv-data", newTVSchema)
module.exports = tvdata

const collection = mongoose.model("collection", newSchema)
//module.exports = collection

module.exports = {
    collection,
    tvdata
}