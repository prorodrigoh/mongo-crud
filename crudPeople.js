import { ObjectId } from "mongodb";
import { getCollection } from "./collection.js";


export const createPeople = async (name, DOB) => {
    const col = await getCollection();
    const insertedResults = await col.insertOne({
      name,
      DOB,
    });
  
    return insertedResults.insertedId;
};

export const getPeople = async () => {
    const col = await getCollection()
    const ret = col.find({})
    return ret.toArray()
}

export const getPersonByName = async (name) => {
    const col = await getCollection()
    const ret = col.find({ 
        name: {
            $regex: `.*${name}.*`,
        },
    })
    return ret.toArray()
}

export const updPersonName = async (oldName, newName) => {
    const col = await getCollection()
    const old = await getPersonByName(oldName)
    // update
    const result = col.updateOne(
        { _id: old.id },                // filter
        { $set: { name: newName } },    // mongo set function
    )
    // return 1 or 0 
    return (`Total of modified documents: ${result.modifiedCount}`)
}

export const delPersonByName = async (name) => {
    const col = await getCollection()
    const target = await getPersonByName(name)
    const result = col.deleteOne(target._id)
}

