const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const connectionDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://rohitrathod340:Rohit013@deardiary.fgnmlm2.mongodb.net/MyDB', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
    };

connectionDB();

const recordSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Record = mongoose.model('Record', recordSchema);

app.get('/', (req, res) => {
    res.send('Welcome to the Keeper API');
  });

  app.get('/api/records', async (req, res) => {
    try {
      const records = await Record.find();
      res.json(records);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve Records' });
    }
  });
  
  app.post('/api/records', async (req, res) => {
    console.log('Received a POST request:', req.body);
    const { title, content } = req.body;
  
    try {
      const newRecord = new Record({
        title,
        content,
      });
  
      const savedRecord = await newRecord.save();
      res.json(savedRecord);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save record' });
    }
  });
  
  app.delete('/api/records/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedRecord = await Record.findByIdAndDelete(id);
      if (!deletedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
  
      res.json({ success: true, deletedRecord });
    } catch (error) {
      console.error('Error deleting record:', error);
      res.status(500).json({ error: 'Failed to delete record' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });