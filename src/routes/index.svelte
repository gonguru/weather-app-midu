<script>
	import { getGeolocation } from '../routes/services/location.js';
	import { getWeather } from '../routes/services/weather.js';
	import { weather } from '../stores.js';
	import MainWeather from '../components/main-weather.svelte';

	async function app() {
		let location;
		try {
			location = await getGeolocation();
			console.log('Geolocation permission granted');
		} catch (error) {
			//Lake Hillier - Australia (Default values)
			location = {
				latitude: 20.6737919,
				longitude: -103.3354131
			};
		} finally {
			const { latitude, longitude } = location;
			const weatherObj = await getWeather(latitude, longitude);
			weather.set(weatherObj);
		}
	}

	app();
</script>

<MainWeather />
