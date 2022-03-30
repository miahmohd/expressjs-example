const { MongoClient } = require("mongodb")

// {
//     _id,
//     createdAt: Date,
//     item: String ("Latte","Caffè","..."),
//     price: Number,
//     qty: Number,
//     status: String ( "created" | "paid" | "canc")
// }


let client = null;

const getClient = async () => {
    if (client != null) {
        return client;
    }
    client = new MongoClient("mongodb://root:root@localhost:27017/?maxPoolSize=20&w=majority")
    await client.connect();
    return client;
}

const getCollection = async () => {
    client = await getClient();
    const collection = await client.db("sturbucks").collection("orders");
    return collection;
}

const getOrderList = async () => {
    return await collection.find({}).toArray()
}

const createOrder = async (order) => {
    return await collection.insert(order)
}


const payOrder = async (id) => {
    return await collection.updateOne({
        _id: id
    }, {
        $set: { status: "PAID" }
    })
}



module.exports = {
    getClient
}

// const ordine = {
//     _id
//     createdAt: Date,
//     item: String ("caffe", "latte" ...)
//     price: Number,
//     qty: Number
//     state: string ("created" | "payed" | "canceled")
// }