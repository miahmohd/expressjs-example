// @ts-check
const express = require('express');
const cors = require('cors');
const { getCollectcion } = require('./model');
const { ObjectId } = require('bson');


const app = express()
const port = 3000



app.use(express.json())
app.use(cors())







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})