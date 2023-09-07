const express = require('express');
const http = require('http');
const port = 3000;
const cors = require('cors');
const db = require("./models");
const { mongo } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongourl = 'mongodb://localhost:27017';

const server = http.createServer(async(req,res)=>{
  const {method,url}=req;
  const path = url.split('?')[0];

  if(method == 'GET'){
    if(path == '/movies'){
      const client = new MongoClient(mongourl,{userNewUrlParser:true});
      await client.connect();
      const db = client.db('moviesdb');
      const moviesCollection = db.collection('movies');
      const movieData = await moviesCollection.find().toArray;
      res.writeHead(200,{'contect-type':'application/json'});
      res.end(JSON.stringify(movieData)); 
    }
    if(path == '/genres'){
      const client = new MongoClient(mongourl,{userNewUrlParser:true});
      await client.connect();
      const db = client.db('genresdb');
      const genresCollection = db.collection('genres');
      const genresData = await genresCollection.find().toArray;
      res.writeHead(200,{'contect-type':'application/json'});
      res.end(JSON.stringify(genresData)); 
    }
  }
  if(path == '/artists'){
    const client = new MongoClient(mongourl,{userNewUrlParser:true});
    await client.connect();
    const db = client.db('astistsdb');
    const artistsCollection = db.collection('artists');
    const artistsData = await artistsCollection.find().toArray;
    res.writeHead(200,{'contect-type':'application/json'});
    res.end(JSON.stringify(artistsData)); 
  }
})


db.mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
