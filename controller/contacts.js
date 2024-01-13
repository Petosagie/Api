// controller/contacts.js
const { getDb } = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// GET all contacts
// controllers/contacts.js
const getAll = async (req, res) => {
  try {
    const db = getDb(); // Ensure that the database connection is retrieved
    const result = await db.collection('contacts').find().toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// GET a single contact by ID
const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().collection('contacts').findOne({ _id: userId });
    
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  getSingle,
};
