const { MongoClient } = require("mongodb");
const fs = require('fs');

// Replace the following with your Atlas connection string
const url = "mongodb+srv://srivijayaraghav:Vijaya1303@placementportal.63l2xgo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "recdeets";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    const col = db.collection("recruiters");
    
    fs.readFile('recruiters.json', 'utf8', async (error, data) => {
      if (error) {
        console.error(error);
        return;
      }
    
      const jsonData = JSON.parse(data);
      const studentDocuments = jsonData.map(item => ({
        recname: item.RecruiterName,
        compname: item.CompanyName,
        email: item.Email,
      }));
      
      // Insert the studentDocuments into the collection
      const insertManyResult = await col.insertMany(studentDocuments);
      const insertedIds = insertManyResult.insertedIds;
      console.log(`${insertManyResult.insertedCount} documents were inserted.`);
      
      for (const id of Object.values(insertedIds)) {
        console.log(`Inserted a document with id ${id}`);
      }
      
      await client.close();
    });
  } catch (e) {
    console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
    const insertedIds = e.result.result.insertedIds;
    for (const id of Object.values(insertedIds)) {
      console.log(`Processed a document with id ${id._id}`);
    }
    console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
    
    await client.close();
  }
}

run().catch(console.dir);
