const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/moviesdb';

const client = new MongoClient(url,{userNewParser:true, userUnifiedTopology:true});
module.exports = client;

const dbClient = require('.app/config/db.config.js');

async function connectToDatabase(){
    await dbClient.connect();
    console.log("database connected succesfully")
}

connectToDatabase();

mongoose.connect(mongoUrl, {
    userNewUrlParser:true,
    userUnifiedTopology:true,
});


const db = mongoose.connection;


module.exports = {
    mongoose,
    db
};