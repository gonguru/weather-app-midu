<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
	const { today } = weatherObject;
</script>

<main class="flex flex-col items-center w-11/12 smoke rounded-md mx-auto text-center">
	<section class="relative min-h-full min-w-full">
		<header class="flex justify-between text-xs p-1">
			<span class="text-xs">Today</span>
			<small>{today.date}</small>
		</header>

		<h2 class="sm:text-md md:text-lg">
			{today.condition}
		</h2>

		<div class="flex items-center sm:relative h-2/3">
			<p class="sm:absolute sm:z-10 sm:left-8 w-1/2 text-8xl">
				{today.temp}
				<strong class="text-xl absolute top-2 text-amber-500"> &#8451; </strong>
			</p>
			<div class="sm:w-5/12 sm:absolute sm:right-10">
				<img preload class="object-cover" src={today.image_src} alt="weather representation" />
			</div>
		</div>

		<div class="flex text-xs justify-between w-full absolute bottom-3 p-2">
			<aside
				class=" flex flex-col items-center justify-center w-9 h-9 border-2 rounded-full relative"
			>
				{today.mintemp_c}&#8451;
				<small
					class="absolute bg-white text-blue-900 w-5 h-5 text-center leading-loose top-6 rounded-full"
					>Min</small
				>
			</aside>

			<aside
				class=" flex flex-col items-center justify-center w-9 h-9 border-2 rounded-full relative"
			>
				{today.maxtemp_c}&#8451;
				<small
					class="absolute bg-white text-blue-900 w-5 h-5 text-center leading-loose top-6 rounded-full"
					>Max</small
				>
			</aside>
		</div>

		<footer class="text-xs p-1 absolute bottom-0 w-full">
			<i class="lni lni-map-marker" />
			<small class="tex">{today.name}</small>
		</footer>
	</section>
</main>

<style>
	main {
		height: 35%;
	}
	img {
		width: 750px;
	}
	:global(.smoke) {
		background-image: radial-gradient(rgba(102 153 255 /0.1), rgba(0 0 0 /0.3));
	}
	@media (max-width: 700px) {
		section div:first-of-type p {
			text-shadow: 0.2rem 0.1rem 1rem #040450;
		}

		section div:first-of-type strong {
			text-shadow: 0.15rem 0.1rem 0.4rem #040450;
		}
	}
</style>
