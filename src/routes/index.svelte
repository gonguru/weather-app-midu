<script>
	import { getGeolocation } from '../services/location.js';
	import { getWeather } from '../services/weather.js';
	import { weather, alerts } from '../stores.js';
	import MainWeather from '../components/main-weather.svelte';
	import Spinner from '../components/spinner.svelte';
	import Alert from '../components/alert.svelte';

	let loading = false;
	let message = '';

	async function app() {
		loading = true;
		message = 'Obtaining geolocation...';
		let location;
		try {
			location = await getGeolocation();
			addAlert({
				id: new Date().getMilliseconds(),
				message: 'Geolocation permission granted',
				border: 'border-green-600'
			});
		} catch (error) {
			//Lake Hillier - Australia (Default values)
			location = {
				latitude: 20.6737919,
				longitude: -103.3354131
			};
			addAlert({
				id: new Date().getMilliseconds(),
				message: error.message,
				border: 'border-red-600'
			});
		} finally {
			const { latitude, longitude } = location;
			const weatherObj = await getWeather(latitude, longitude);
			weather.set(weatherObj);
			loading = false;
		}
	}

	function addAlert(alertObj) {
		setTimeout(() => {
			let filteredAlerts = $alerts.filter((alert) => alertObj.id !== alert.id);
			alerts.set(filteredAlerts);
		}, 3000);
		alerts.update((alerts) => [...alerts, alertObj]);
	}

	app();
</script>

{#if loading}
	<Spinner {message} />
{:else}
	<MainWeather />
	{#each $alerts as alert}
		<Alert border={alert.border} message={alert.message} />
	{/each}
{/if}
