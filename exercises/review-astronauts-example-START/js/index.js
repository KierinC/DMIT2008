// import bootstrap here.
import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

let astronautListElement = document.querySelector('.astronaut-list')
console.log(astronautListElement)

getAstronautList().then((data) => {
  // render the astronaut
  data.results.map((astronaut) => {
    console.log(astronaut)
    console.log('...................')
    renderAstronautListItem(astronaut, astronautListElement)
  })
})