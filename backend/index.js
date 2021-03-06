const express = require('express');
const app = express();
const users = require('./routes/users');
const nfts = require('./routes/nfts');
const collections = require('./routes/collections')
const admin = require('./routes/admin')
const cors = require('cors');

app.use(express.json());
app.use(cors());

// „Podłączamy” obsługę „endpointów”, które zdefiniowaliśmy dla kolekcji 'users' w katalogu routes/users.js
app.use('/users', users);
app.use('/nfts', nfts);
app.use('/collections', collections)
app.use('/admin', admin)

require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'local'
};
// Łączymy się z bazą i „stawiamy” serwer API
// Do kontaktu z serwerem MongoDB wykorzystamy bibliotekę Mongoose

const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 5000
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));

