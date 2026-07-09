const express = require('express');
const app = express();
const router = require('./routes/router.js');



app.use(express.json());

const db = require('./db/db.js');
db();

app.use('/api',router);

const port = process.env.PORT



app.listen(port,()=>console.log('the server is running'))
