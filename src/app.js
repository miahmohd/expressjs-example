const express = require('express');
const cors = require('cors');
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
app.use(cors(
  { origin: "https://web.postman.co" }
))

app.post('/orders', async (req, res) => {
  console.log(req.body);
  const newOrder = await createOrder(req.body);
  res.json(newOrder);
})

app.get("/orders", async (req, res) => {
  const orders = await getOrderList();
  res.json(orders);
})


app.delete("/orders/:id", async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  await deleteOrder(id)
  res.json(id);
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})