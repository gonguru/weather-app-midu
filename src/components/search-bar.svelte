<script>
	import { browser } from '$app/env';
	import { getWeather } from '../services/weather.js';
	import { loading, weather, alerts, msg } from '../stores.js';

	if (browser) {
		document.addEventListener('keydown', async (e) => {
			const searchBar = document.querySelector('input');
			if (document.activeElement === searchBar && e.key === 'Enter') {
				const city = searchBar.value;
				msg.set(`Bringing ${city} weather...`);
				loading.set(true);
				const location = {
					city
				};
				const data = await getWeather(location);
				//Handling location not found
				if (data.today) {
					weather.set(data);
				} else {
					addAlert({
						id: new Date().getMilliseconds(),
						message: data.message,
						border: 'border-red-600'
					});
				}
				loading.set(false);
			}
		});
	}

	function addAlert(alertObj) {
		setTimeout(() => {
			let filteredAlerts = $alerts.filter((alert) => alertObj.id !== alert.id);
			alerts.set(filteredAlerts);
		}, 5000);
		alerts.update((alerts) => [...alerts, alertObj]);
	}
</script>

<div
	class="right-0 top-1 flex flex-row-reverse mr-4 absolute items-center rounded-full sm:w-9 sm:h-9"
>
	<i class="lni lni-search-alt text-white top-0 left-0 mx-auto text-xl" />
	<input
		id="search"
		autocomplete="off"
		class="cursor-pointer text-slate-600 fixed pl-4 rounded-full sm:w-9 sm:h-9"
		type="text"
		placeholder="City name"
	/>
</div>

<style>
	#search {
		opacity: 0;
		transition: width 1s, opacity 1s;
		max-width: 300px;
	}
	#search:focus {
		opacity: 1;
		width: 30rem;
	}
</style>
