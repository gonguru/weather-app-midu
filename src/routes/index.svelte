<script>
	import { getGeolocation } from '../services/location.js';
	import { getWeather } from '../services/weather.js';
	import { weather, alerts, loading, msg } from '../stores.js';
	import MainWeather from '../components/main-weather.svelte';
	import Spinner from '../components/spinner.svelte';
	import Alert from '../components/alert.svelte';
	import Forecast from '../components/forecast.svelte';
	import HourForecast from '../components/hour-forecast.svelte';

	async function app() {
		msg.set('Obtaining geolocation...');
		loading.set(true);
		let location;
		try {
			location = await getGeolocation();
			addAlert({
				id: new Date().getMilliseconds(),
				message: 'Geolocation permission granted',
				border: 'border-green-600'
			});
		} catch (error) {
			//Guadalajara ,Jalisco - México (Default values)
			location = {
				latitude: 20.67,
				longitude: -103.39
			};
			addAlert({
				id: new Date().getMilliseconds(),
				message: error.message,
				border: 'border-red-600'
			});
			addAlert({
				id: new Date().getMilliseconds(),
				message: 'Geolocation failed, showing Guadalajara - México',
				border: 'border-red-600'
			});
		} finally {
			const weatherObj = await getWeather(location);
			weather.set(weatherObj);
			loading.set(false);
		}
	}

	function addAlert(alertObj) {
		setTimeout(() => {
			let filteredAlerts = $alerts.filter((alert) => alertObj.id !== alert.id);
			alerts.set(filteredAlerts);
		}, 5000);
		alerts.update((alerts) => [...alerts, alertObj]);
	}

	app();
</script>

{#if $loading}
	<Spinner />
{:else}
	<MainWeather />
	<Forecast />
	<HourForecast />
	<div class="left-0 right-0 fixed top-3 flex flex-col items-center md:w-1/2">
		{#each $alerts as alert}
			<Alert border={alert.border} message={alert.message} />
		{/each}
	</div>
{/if}
