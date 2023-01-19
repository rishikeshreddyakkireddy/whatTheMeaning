const express = require('express');
const cors = require('cors') 
let Dictionary = require("oxford-dictionary");

const app = express();



app.use(express.json())
const corsOptions ={
    origin:'*'
 }
 
app.use(cors(corsOptions))


let config = {
  app_id : "f5ce5cce",
  app_key : "faeb14be7ac5f3fe74adcc8d4cd4e45d",
  source_lang : "en-us"
};


let dict = new Dictionary(config);


app.get("/:word",(req, res) => {
    let word = req.params.word;
    let lookup = dict.definitions(word);

    lookup.then(function(data) {
        let result = JSON.stringify(data, null, 4);
        res.send(data.results);
        console.log(data.results)
    },
    function(err) {
        console.log(err);
    });
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})