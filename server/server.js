//load express
const express = require('express');

var app = express();

app.listen(5100,function(){
console.log("Listening...");
});


//load mongodb driver
const {MongoClient} = require('mongodb');

const URL="mongodb://127.0.0.1:27017";

var client = new MongoClient(URL);

//handling CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); //* if allow all
 
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});


app.get('/getBatchDetail',async function(req,res){
    let resultt = await getPPABatchDetails();
    res.json(resultt);
});

//use promise using async and await
async function getConnection()
{
    //connect to mongodb
    let result= await client.connect();

    //select db
    let db = result.db("Marvellous");
    
    //select collection
    let collection = db.collection("Batches");

    return collection;
}
async function getPPABatchDetails()
{
    var data =await getConnection();
    data = await data.findOne({"Batch":"PPA"});
    return data;
}
