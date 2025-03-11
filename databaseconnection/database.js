// Purpose: Database connection string
// go to the mongo website
// create a new cluster
// create a new user
//get the connection string
//install mongo db compose
//https://mongodb.github.io/node-mongodb-native/
//code is avalable on the website


const {MongoClient}=require('mongodb');
const url ="mongodb+srv://firstweb:DwqjgR7jfh0h60sn@firstweb.9iplm.mongodb.net/"
const client = new MongoClient(url);
const dbName = "FirstDatabase";
async function main() {
  
  
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('userdatabase');
  
const data = {
   firstname:"sanket",
    middlename: "suresh",
    lastname: "wankhede",
    city: "akola",
    "ph no": 7249545799
};
    //insert the document
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);


    // the following code examples can be pasted here...
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //for count  
    const count = await collection.countDocuments({});
    console.log('count of documents:', count);

    //find all document with firstname sanket
    const query = await collection.find({firstname: 'sanket'}).toArray();
    console.log('query:', query);

    return 'done.';
  }
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());