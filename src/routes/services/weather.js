import { dateFormat, timeFormat } from '../../helpers/dateFormater.js'


const getWeather = async (latitude, longitude) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
        }
    };

    const url = `https://community-open-weather-map.p.rapidapi.com/weather?&lat=${latitude}&lon=${longitude}&lang=sp&units=metric`;
    try {
        const response = await fetch(url, options);
        const weather = await response.json();
        const { main, name, dt, sys } = weather
        const { temp, temp_max, temp_min } = main
        const { sunrise, sunset, country } = sys
        return {
            temp: Math.round(temp),
            temp_max,
            temp_min,
            name: `${name} - ${country}`,
            date: dateFormat(dt),
            sunrise: timeFormat(sunrise),
            sunset: timeFormat(sunset)
        }
    } catch (error) {
        console.error(error)
    }

};

export {
    getWeather
}