import { BASE_URL } from './base'

// the promise way
// const getReviews = () => {
//   return fetch(`${BASE_URL}/reviews`) // promise
//     .then((response)=> {
//       return response.json() // promise
//     }).then((data)=> {
//       return data // what's returned from get reviews
//     })
// }

const getReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`)
    const data = await response.json()
    return data
  } catch (error) {
    // handle it some how here.
    throw error
  }

}
/*
Sample Usage: 
postReview({title: "something", comment: "great", rating: 10})
.then((data)=> {
  //do your magic.
})
*/

const postReview = ({title, comment, rating}) => {
  return fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'     
    },
    body: JSON.stringify({
      title: title,
      comment: comment,
      rating: rating
    })
  }).then((response)=> {
    return response.json()
  }).then((data)=> {
    return data
  })
}

const deleteReview = (id) => {
  return fetch(`${BASE_URL}/reviews/${id}`, {
    method: "DELETE"
  }).then((response)=> {
    return response.json()
  }).then((data)=> {
    return data
  })
}


export { getReviews, postReview, deleteReview }