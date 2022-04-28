import mongodb, {ObjectId} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config();

const client = new mongodb.MongoClient(
    process.env.MONGO_URL
    );

await client.connect();


console.log('Cluster connected')
const db = client.db('project-mongodb');


await client.close();