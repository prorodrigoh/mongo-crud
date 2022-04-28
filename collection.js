import { getDb } from './db.js'

export const getCollection = async (collectionName) => {
    const db = await getDb();
    return db.collection(collectionName);
};

