/*
HTML Structure 

<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>

*/

// renderWeather function
const renderWeather = (weatherdata, element) => {

  let div = document.createElement('div')
  let div2 = document.createElement('div')
  let h5 = document.createElement('h5')
  let h6 = document.createElement('h6')
  let p = document.createElement('p')

  div.classList.add('mt-2', 'card')
  div2.classList.add('card-body')
  h5.classList.add('card-title')
  h6.classList.add('card-subtitle', 'mb-2')
  p.classList.add('card-text')

  let h5Content = document.createTextNode(`${weatherdata}`)
  let h6Content = document.createTextNode(`${weatherdata}`)
  let pContent = document.createTextNode(`${weatherdata}`)

  div2.appendChild(h5)
  div2.appendChild(h6)
  div2.appendChild(p)
  div.appendChild(div2)
}

// export the renderWeather function
export {renderWeather}