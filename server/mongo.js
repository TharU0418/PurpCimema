const mongoose = require("mongoose")

//mongoose.connect("mongodb://localhost:27017/react-login-tut")
mongoose.connect("mongodb+srv://purpNtharu:5z8qsgS3fzuyMIva@cluster0.dwo2kyv.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected")
})
.catch(() => {
    console.log("failed.")
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

const collection =mongoose.model("collection", newSchema)
module.exports = collection
