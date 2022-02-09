'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pg = require('pg');
const db = require('./app/models');


//drop existing tables and re-sync database during development
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//routes
app.get('/', (request, response) => {
    response.send('Home Page!');
});

app.get('*'), (request, response) =>
  response.status(404).send('This route does not exist');




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`));



