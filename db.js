import mongodb, {ObjectId} from 'mongodb'

// these are responsible to manage the .env file with the connection code containing the login and password
import dotenv from 'dotenv'
dotenv.config();

// with this we can connect to any database 
dbName = 'project-mongodb'
export const getDb = async (dbName) => {

    const client = new mongodb.MongoClient(process.env.MONGO_URL);
    // because the function is ASYNC, connect() does not need AWAIT because it will await anyways 
    client.connect(dbName);

    // because the function is ASYNC, db() does not need AWAIT because it will await anyways 
    return client.db();
}
