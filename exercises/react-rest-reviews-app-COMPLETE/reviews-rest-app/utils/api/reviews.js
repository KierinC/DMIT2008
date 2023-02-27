import { BASE_URL } from './base.js'

// the promise way
const getReviews = () => {
  return fetch(`${BASE_URL}/reviews`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      return data // what's returned from get reviews
    })
}

// the async await way with try catch
// const getReviews = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw(error)
//   }
// }

const postReview = ([title, comment, rating]) => {
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
  }).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export { getReviews, postReview }