
const getWeather = async (latitude, longitude) => {
    const response = await fetch(`/api/weather?coords=${latitude},${longitude}`)
    const data = await response.json()
    return data
};

export {
    getWeather
}