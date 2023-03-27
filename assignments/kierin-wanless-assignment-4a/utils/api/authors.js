import { BASE_URL } from "./base";

export default function getAuthor (authorkey) {
  return fetch(`${BASE_URL}/authors/${authorkey}.json`) // promise
    .then((response)=> {
      return response.json() // promise
    }).then((data)=> {
      return data // what's returned from get author
    })
}