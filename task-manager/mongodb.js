//CRUD creade read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

// const id = new ObjectID();

// console.log(id); // 5e945f96eba8c6ef54a73057
// console.log(id.getTimestamp()); // 2020-04-13T12:48:22.000Z

const connectionURL = 'mongodb://127.0.0.1:27017'; //default mongo url
const databaseName = 'task-manager'; //any name

// to run -> node mongo.js

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database');
    }
    const db = client.db(databaseName);

    // db.collection('users')
    //   .updateOne(
    //     { _id: new ObjectID('5e91d33c565aceec4bbcecd0') },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .deleteMany({ age: 36 })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    db.collection('tasks')
      .deleteOne({ description: 'Pot plants' })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
);
