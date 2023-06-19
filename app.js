const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const config = require('config');
const db = config.get('mongoURI');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
if (db) {
    connectDB(db);
}

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
