// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

// import bootstrap here.
import 'bootstrap/dist/css/bootstrap.min.css'

import { getWeather } from './api/base'
import { renderWeather } from './dom/weather'

const weatherSearch = document.querySelector('#weather-search')
const cityInput = document.querySelector('.form-control')
const weatherContainer = document.querySelector('.weather-container')

weatherSearch.addEventListener('submit', (evt) => {
  evt.preventDefault()

  getWeather(cityInput.value).then(data => {
    renderWeather(data, weatherContainer)
  });
})