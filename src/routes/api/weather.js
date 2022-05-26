import { dateFormat } from '../../helpers/dateFormater.js'
import { imageResolver } from '../../helpers/urlResolver.js'

export async function get(event) {
    const { searchParams } = event.url
    const coords = searchParams.get('coords')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
        }
    };

    // const url = `http://localhost:3000/api/test`;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${coords}&days=3`;
    try {
        const response = await fetch(url, options);
        const weather = await response.json();
        const { location, current, forecast: { forecastday } } = weather
        const { name, region, country, localtime_epoch } = location
        const { temp_c, condition, is_day } = current
        const { text, code } = condition
        const [today, tomorrow, afterTomorrow] = forecastday
        const { day: { maxtemp_c }, day: { mintemp_c } } = today

        const body = {
            today: {
                temp: Math.round(temp_c),
                maxtemp_c: Math.round(maxtemp_c),
                mintemp_c: Math.round(mintemp_c),
                name: `${name}, ${region} - ${country}`,
                date: dateFormat(localtime_epoch),
                image_src: imageResolver(code, is_day),
                description: text
            }
        }
        return {
            status: 200,
            body
        }

    } catch (error) {
        console.error(error)
    }

};
