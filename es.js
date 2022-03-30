
const fs = require("fs/promises");
const { MongoClient } = require("mongodb");

let client = null;

const getClient = async () => {
    if (client != null) {
        return client;
    }

    client = new MongoClient("mongodb://root:root@localhost:27017/?maxPoolSize=20&w=majority")
    await client.connect();
    return client;
}

async function main() {
    const data = await fs.readFile("./es4.json");
    const json = JSON.parse(data.toString());

    client = await getClient();
    const collection = await client.db("dbTest").collection("books");

    try {
        await collection.insertMany(json);
    } catch (e) {
        console.error("Documenti già caricati")
    }

    const res = await collection.find({
        pageCount: { $gt: 400 }
    })

    const arr = await res.toArray()
    console.log(arr);

    await client.close()

}