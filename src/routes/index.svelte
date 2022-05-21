<script>
	import { browser } from '$app/env';

	let weatherObject = {};

	if (browser) {
		if ('geolocation' in navigator) {
			const { geolocation } = navigator;
			geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				getWeather(latitude, longitude);
			});
		}
	}

	const getWeather = async (latitude = 20.6955, longitude = -103.4553) => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
				'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
			}
		};
		const url = `https://community-open-weather-map.p.rapidapi.com/weather?&lat=${latitude}&lon=${longitude}&lang=sp&units=metric`;
		const response = await fetch(url, options);
		const result = await response.json();

		weatherObject = fillWeather(result);
	};

	const fillWeather = (obj) => {
		console.log(obj);
		const { main } = obj;
		const { temp, temp_max, temp_min } = main;
		return {
			temp,
			temp_max,
			temp_min
		};
	};
</script>

<main class="flex flex-col items-center">
	<section class="bg-slate-200 rounded-lg p-1 w-11/12">
		<div>
			<span class="text-sm">Today</span>
			<span class="text-xs" />
		</div>
		<h2>Temperature</h2>
		<span>{weatherObject.temp}</span>
	</section>
</main>
