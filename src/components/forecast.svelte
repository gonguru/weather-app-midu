<script>
	import { weather } from '../stores.js';
	let weatherObj;
	weather.subscribe((acc) => {
		weatherObj = acc;
	});

	const { tomorrow, afterTomorrow } = weatherObj;
	console.log(tomorrow, afterTomorrow);
</script>

<div id="forecast" class="flex gap-4 w-11/12 mx-auto mt-3">
	<section class="flex flex-col items-center sm:w-1/2 smoke rounded-md p-3 h-full">
		<small class="text-xs">{tomorrow.date}</small>
		<div class="flex items-center justify-center">
			<p class="text-center relative text-4xl w-1/3">
				{tomorrow.temp}
				<strong class="absolute text-sm text-amber-500"> &#8451; </strong>
			</p>

			<div class="w-2/3">
				<img preload class="object-cover" src={tomorrow.image_src} alt="weather representation" />
			</div>
		</div>
		<h4 class="text-xs">{tomorrow.condition}</h4>
	</section>

	<section class="flex flex-col items-center sm:w-1/2 smoke rounded-md p-3">
		<small class="text-xs">{afterTomorrow.date}</small>
		<div class="flex items-center justify-center">
			<p class="text-center relative text-4xl w-1/3">
				{afterTomorrow.temp}
				<strong class="absolute text-sm text-amber-500"> &#8451; </strong>
			</p>

			<div class="w-2/3">
				<img
					preload
					class="object-cover"
					src={afterTomorrow.image_src}
					alt="weather representation"
				/>
			</div>
		</div>
		<h4 class="text-xs">{afterTomorrow.condition}</h4>
	</section>
</div>

<style>
	#forecast {
		height: 20%;
	}
</style>
