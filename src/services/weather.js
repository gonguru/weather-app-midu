import { dateFormat, timeFormat } from '../helpers/dateFormater.js'
import { imageResolver } from '../helpers/urlResolver.js';


const getWeather = async (latitude, longitude) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
        }
    };

    const url = `https://community-open-weather-map.p.rapidapi.com/weather?&lat=${latitude}&lon=${longitude}&lang=en&units=metric`;
    try {
        const response = await fetch(url, options);
        const weather = await response.json();
        const { main, name, dt, sys, weather: info } = weather
        const { temp, temp_max, temp_min } = main
        const { sunrise, sunset, country } = sys
        const { description } = info[0]
        return {
            temp: Math.round(temp),
            temp_max,
            temp_min,
            name: `${name} - ${country}`,
            date: dateFormat(dt),
            sunrise: timeFormat(sunrise),
            sunset: timeFormat(sunset),
            image: imageResolver(info[0]),
            description
        }
    } catch (error) {
        console.error(error)
    }

};

export {
    getWeather
}