const express = require('express');
const { Db } = require('mongodb');

const app = express()
const port = 3000

// Api:
// creare un ordine
// pagare l'ordine
// lista degli ordini
// modificare l'ordine
// stato dell'ordine
// cancellare l'ordine

// get /user?id=8
app.get('/', (req, res) => {
  // leggere req tirare fuori le info che vi servon
  const userId = req.query.id;

  // create l'obj res e lo inviate
  res.json("");
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})