import { BASE_URL } from "./base";

const getAuthor = (authorkey) => {
  return fetch(`${BASE_URL}/authors/${authorkey}.json`) // promise
    .then((response)=> {
      return response.json() // promise
    }).then((data)=> {
      return data // what's returned from get author
    })
}

const getBooks = (authorkey) => {
  return fetch(`${BASE_URL}/authors/${authorkey}/works.json`) // promise
    .then((response)=> {
      return response.json() // promise
    }).then((data)=> {
      return data // what's returned from get author
    })
}

export { getAuthor, getBooks }