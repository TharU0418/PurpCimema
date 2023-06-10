const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())



app.post('/AddMovie', async(req, res) => {
    const{letter,name,year,production,category,poster,description,wstatus,myrank} = req.body

    const data = {
        letter:letter,
        name:name,
        year:year,
        production:production,
        category:category,
        poster:poster,
        description:description,
        wstatus:wstatus,
        myrank:myrank
    }

    try{
        const check = await collection.findOne({name:name})

        if(check){
            res.json("exist")
        }else{
            res.json("noteexist")
            await collection.insertMany([data])
        }
    }catch(e){
        res.json("notexist")
    }

});

app.get('/AddMovie', async(req, res) => {
    const{letter,name,year,production,category,poster,description,wstatus,myrank} = req.body

    try{
        const data = await collection.find()
        res.json(data)
    }catch(error){
        console.log(error)
        res.status(8000).json({error:'Internal Server Error'})
    }

});


app.put('/AddMovie/:id', async(req,res) => {
    const id  = req.params.id;
    const {poster, description, wstatus, myrank} = req.body;

    try {
        const check = await collection.findOne({ _id: id });

        if (check) {
            await collection.updateOne(
                { _id: id},
                {
                    $set : {
                        poster:poster,
                        description:description,
                        wstatus:wstatus,
                        myrank:myrank
                    }
                }
            );
        
          res.json('success');
        } else {
          res.json('failed');
        }
      } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
      }

})

// const dataSchema = new mongoose.Schema({
//     letter:String,
//     name:String,
//     year:String,
//     production:String,
//     category:String,
//     poster:String,
//     description:String,
//     wstatus:String,
//     myrank:String
// });

// const DataModel = mongoose.model('Data', dataSchema )

// app.get('/AddMovie', async(req, res) => {
//     try{
//         const data = await DataModel.find();
//         res.json(data)
//     }catch(error){
//         console.log(error);
//         res.json(8000).json({error:'Internal Server Error'});
//     }
// });

app.listen(8000, () => console.log("Server Up and running"));