const { MongoClient } = require("mongodb")

const priceTable = {
    "latte": 1,
    "caffe": 1.2,
    "acqua": 0.5,
}

// {
//     _id,
//     createdAt: Date,
//     item: String ("Latte","Caffè","..."),
//     price: Number,
//     qty: Number,
//     status: String ( "CREATED" | "PAID" | "DELETED")
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
    return await getCollection().find({}).toArray()
}

const createOrder = async (order) => {

    return await getCollection().insert(
        {
            ...order,
            createdAt: Date.now(),
            status: "CREATED",
            price: priceTable[order.item] * order.qty
        }
    )
}


const payOrder = async (id) => {
    return await getCollection().updateOne({
        _id: id
    }, {
        $set: { status: "PAID" }
    })
}

const getOrderStatus = async (id) => {
    const orders = await getCollection().find({
        _id: id
    }).toArray()
    if (orders.length == 0) {
        return null;
    }
    return orders[0].status
}


const deleteOrder = async (id) => {
    return await getCollection().updateOne({
        _id: id
    }, {
        $set: { status: "DELETED" }
    })
}

const changeOrder = async (id, order) => {

    return await getCollection().updateOne({
        _id: id
    }, {
        $set: {
            item: order.item,
            qty: order.qty,
            createdAt: Date.now(),
            price: priceTable[order.item] * order.qty
        }
    })
}




module.exports = {
    getOrderList,
    createOrder,
    payOrder,
    getOrderStatus,
    deleteOrder,
    changeOrder
}

