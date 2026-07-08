const express = require('express');
const app = express();

app.use(express.json());

const db = require('./db/db.js');
db();

const port = process.env.PORT



app.listen(port,()=>console.log('the server is running'))
