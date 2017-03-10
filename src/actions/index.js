import axios from 'axios'

const API_KEY = '05739810856f7b7644fa251b0ba8fa69'
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = API_URL + '&q=' + city + ',th'
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}