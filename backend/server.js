const express = require('express');
const app = express();
const router = require('./routes/router.js');

const cors = require('cors');

app.use(cors()); //



app.use(express.json());

const db = require('./db/db.js');
db();

app.use('/api',router); // signup route

const port = process.env.PORT



app.listen(port,()=>console.log(`the server is running in ${port}`))
