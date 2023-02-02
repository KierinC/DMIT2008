// replace your api key 
const API_KEY = "6b34230a5928a845c75c13d9bf908f11"

const END_POINT = 'https://api.openweathermap.org/data/2.5/'

// create getWeather function here

const getWeather = (city) => {
  return fetch(`${END_POINT}weather?q=${city}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((weatherInfo) => weatherInfo[0]);
}

// export the getWeather function

export {getWeather}