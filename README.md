# Miduweather

#Stolen resources
-> Icons: https://ui8.net/hosein_bagheri/products/3d-weather-icons40
-> Inspiration: https://dribbble.com/shots/16361858-Weather-Forecast-Mobile-application

# What makes me cry during this development?

1.- Run svelte-kit with ssl certificate (vite) 
    1.1 -> npm run dev -- --https
2.- Obtaining geolocation by asking permissions
    2.1 -> Permissions API doesn't work with safari (cause mobile first)
        -> Promise ::resolve -> should return user location
        -> Promise ::reject -> Lake Hilier by default
    2.2 -> How svelte is saving state? -> stores.js
        -> What is a writable? 
        -> suscribe, set, update and magic $prop