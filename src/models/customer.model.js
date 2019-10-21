let mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:<password>@cluster0-2skac.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
     name: String,
     email: {
       type: String,
       required: true,
       unique: true
     }
})

module.exports = mongoose.model('Customer', CustomerSchema)




