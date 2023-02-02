// replace your api key 
const API_KEY = "6b34230a5928a845c75c13d9bf908f11"

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

// create getWeather function here
const getWeather = (city) => {
  return fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
      .then((res) => res.json())
      .then((weatherInfo) => weatherInfo);
}

// export the getWeather function
export {getWeather}