const { MongoClient, Collection } = require("mongodb")

// {
//     _id,
//
//     title
//     tags
//      pages:   [
//       {
//          num
//          content
//        }
//       ]
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

/**
 *
 * @param {*} collection
 * @returns {Collection}
 */
const getCollectcion = async (collection) => {
    client = await getClient();
    return await client.db("es3").collection(collection);
}



module.exports = {
    getCollectcion
}