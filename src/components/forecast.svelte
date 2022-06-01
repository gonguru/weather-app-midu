<script>
	import { weather } from '../stores.js';
	let weatherObj;
	weather.subscribe((acc) => {
		weatherObj = acc;
	});

	const { tomorrow, afterTomorrow } = weatherObj;
</script>

<div id="forecast" class="flex gap-3 w-11/12 mx-auto mt-3">
	<section class="sm:w-1/2 p-1 smoke flex items-center rounded-md text-xs flex-col">
		<small>{tomorrow.date}</small>
		<div class="flex h-full w-full justify-center">
			<p class="relative text-3xl w-1/3 self-end">
				{tomorrow.temp}
				<strong class="absolute text-sm text-amber-500"> &#8451; </strong>
			</p>
			<img
				class="w-2/4 object-contain self-start"
				src={tomorrow.image_src}
				alt={tomorrow.condition}
			/>
		</div>
		<p>{tomorrow.condition}</p>
	</section>

	<section class="sm:w-1/2 p-1 smoke flex items-center rounded-md text-xs flex-col">
		<small>{afterTomorrow.date}</small>
		<div class="flex h-full w-full justify-center">
			<p class="relative text-3xl w-1/3 self-end">
				{afterTomorrow.temp}
				<strong class="absolute text-sm text-amber-500"> &#8451; </strong>
			</p>
			<img
				class="w-2/4 object-contain self-start"
				src={afterTomorrow.image_src}
				alt={afterTomorrow.condition}
			/>
		</div>
		<p>{afterTomorrow.condition}</p>
	</section>
</div>

<style>
	#forecast {
		min-height: 20%;
	}
	section p:first-child {
		text-shadow: 1px 1px 0.5rem #040450;
	}

	strong {
		text-shadow: 1px 1px 5px #040450;
	}
</style>
