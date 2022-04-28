import { createPeople } from "./crudPeople.js"

// create a person
await createPeople('Rodrigo', 'Henriques', '01/01/2020')
// show all entries
const people = await getPeople()
console.log(people)

