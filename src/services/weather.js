
const getWeather = async (location) => {
    const { latitude, longitude, city } = location
    const url = city ? `/api/weather?q=${city}` : `/api/weather?q=${latitude},${longitude}`
    const response = await fetch(url)
    const data = await response.json()
    return data
};


export {
    getWeather
}