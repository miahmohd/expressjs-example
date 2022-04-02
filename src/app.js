const express = require('express');
const {
  changeOrder,
  deleteOrder,
  createOrder,
  getOrderList,
  getOrderStatus,
  payOrder
} = require('./model.js')

const app = express()
const port = 3000

// Api:
// creare un ordine m post
// pagare l'ordine m
// lista degli ordini m
// modificare l'ordine
// stato dell'ordine m
// cancellare l'ordine m

app.use(express.json())

app.post('/orders', async (req, res) => {
  console.log(req.body);
  // const newOrder = await createOrder();
  // console.log(newOrder);
  res.json("newOrder");
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})