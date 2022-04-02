const express = require('express');
const { Db } = require('mongodb');

const app = express()
const port = 3000

// Api:
// creare un ordine m
// pagare l'ordine m
// lista degli ordini m
// modificare l'ordine
// stato dell'ordine m
// cancellare l'ordine m

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