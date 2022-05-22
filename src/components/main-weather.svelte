<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
</script>

<main class="flex flex-col items-center">
	<section class="bg-slate-200 rounded-md p-2 w-11/12">
		<div class="flex justify-between">
			<span class="text-md">Today</span>
			<small class="text-xs">{weatherObject.date}</small>
		</div>
		<div class="flex m-3">
			<div class="w-1/2 text-center text-6xl">
				{weatherObject.temp}
				<span class="text-xs absolute top-24">&#8451;</span>
			</div>
			<div class="w-1/2">Image here</div>
		</div>
		<div class="flex text-xs justify-evenly mb-1">
			<aside class=" flex flex-col items-center">
				{weatherObject.sunrise}
				<small>Sunrise</small>
			</aside>
			<aside class=" flex flex-col items-center">
				{weatherObject.sunset}
				<small>Sunset</small>
			</aside>
		</div>
		<p class="text-xs text-center p-1">
			<i class="lni lni-map-marker" />
			{weatherObject.name}
		</p>
	</section>
</main>
