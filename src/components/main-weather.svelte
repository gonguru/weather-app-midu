<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
	const { today } = weatherObject;
</script>

<main class="flex flex-col items-center">
	<section class="rounded-md p-2 w-11/12">
		<header class="flex justify-between text-xs">
			<span class="text-xs">Today</span>
			<small>{today.date}</small>
		</header>

		<h2 class="text-center text-lg">
			{today.description}
		</h2>

		<div class="flex items-center justify-center">
			<p class="text-center relative w-1/2 text-9xl sm:text-8xl sm:left-14">
				{today.temp}
				<strong class="text-xl absolute top-2 text-amber-500"> &#8451; </strong>
			</p>

			<div class="sm:mr-10">
				<img
					class="sm:w-full w-1/2 object-cover"
					src={today.image_src}
					alt="weather representation"
				/>
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
	img {
		max-width: 750px;
	}
	section {
		background-image: radial-gradient(rgba(102 153 255 /0.1), rgba(0 0 0 /0.3));
	}
	@media (max-width: 700px) {
		section div:first-of-type p {
			text-shadow: 0.2rem 0.1rem 1rem #040450;
		}

		section div:first-of-type strong {
			text-shadow: 0.3rem 0.1rem 0.4rem #040450;
		}
	}
</style>
