<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
	const { today } = weatherObject;
</script>

<main class="flex flex-col items-center">
	<section class="rounded-md p-2 w-11/12 smoke">
		<div class="flex justify-between text-xs">
			<span class="text-xs">Today</span>
			<small>{today.date}</small>
		</div>
		<h2 class="text-center text-lg">
			{today.description}
		</h2>
		<div class="flex m-2 items-center">
			<div class="w-1/2 text-center text-8xl relative">
				{today.temp}
				<span class="text-xl absolute top-2 text-amber-500 font-semibold"> &#8451; </span>
			</div>
			<div class="w-1/2 p-8">
				<img class="object-cover" src={today.image_src} alt="weather representation" />
			</div>
		</div>
		<div class="flex text-xs justify-evenly mb-1">
			<aside class=" flex flex-col items-center">
				{today.maxtemp_c} &#8451;
				<span class="text-xs">MAX</span>
			</aside>
			<aside class=" flex flex-col items-center">
				{today.mintemp_c} &#8451;
				<span class="text-xs">MIN</span>
			</aside>
		</div>
		<p class="text-xs text-center p-1">
			<i class="lni lni-map-marker" />
			<small class="tex">{today.name}</small>
		</p>
	</section>
</main>

<style>
	section {
		background-image: radial-gradient(rgba(102 153 255 /0.1), rgba(0 0 0 /0.3));
	}
</style>
