// Initializing and managing a MongoDB database connection using the MongoClient from the 'mongodb' package 
// and the 'dotenv' package for managing environment variables. 

// Import Dependencies:  Imports the 'dotenv' package to load environment variables from a .env file into the process.env object. 
const dotenv = require('dotenv');
dotenv.config();

// MongoClient and Database Initialization:
const MongoClient = require('mongodb').MongoClient;

// Declares a variable _db to store the database connection.
let _db;

// checks whether the database connection (_db) is already established. If so, it returns the existing connection; otherwise, it attempts to connect to the MongoDB server using the URI specified in the environment variable process.env.MONGODB_URI.
// If the connection is successful, it stores the client reference in _db and calls the callback with the client, otherwise, it calls the callback with an error.
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

// Get Database Reference:
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

// Export Module:Exports two functions: initDb for initializing the database connection and getDb for retrieving the database reference.
module.exports = {
  initDb,
  getDb
};