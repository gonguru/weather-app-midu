<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
</script>

<main class="flex flex-col items-center">
	<section class="rounded-md p-2 w-11/12">
		<div class="flex justify-between">
			<span class="text-md ml-4 mt-4">Today</span>
			<small class="text-xs">{weatherObject.date}</small>
		</div>
		<h2 class="text-center text-lg">
			{weatherObject.description}
		</h2>
		<div class="flex m-2 items-center">
			<div class="w-1/2 text-center text-8xl relative">
				{weatherObject.temp}
				<span class="text-xl absolute top-2 text-amber-500 font-semibold"> &#8451; </span>
			</div>
			<img
				class="w-1/2 m-0 object-cover max-w-screen-md"
				src={weatherObject.image}
				alt="weather representation"
			/>
		</div>
		<div class="flex text-xs justify-evenly mb-1">
			<aside class=" flex flex-col items-center">
				{weatherObject.sunrise}
				<span class="text-xs">Sunrise</span>
			</aside>
			<aside class=" flex flex-col items-center">
				{weatherObject.sunset}
				<span class="text-xs">Sunset</span>
			</aside>
		</div>
		<p class="text-xs text-center p-1">
			<i class="lni lni-map-marker" />
			<small>{weatherObject.name}</small>
		</p>
	</section>
</main>

<style>
	section {
		background-image: radial-gradient(rgba(102 153 255 /0.1), rgba(0 0 0 /0.3));
	}
</style>
