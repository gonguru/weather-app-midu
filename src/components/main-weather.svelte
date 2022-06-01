<script>
	import { weather } from '../stores';

	let weatherObject;
	weather.subscribe((obj) => (weatherObject = obj));
	const { today } = weatherObject;
</script>

<main class="w-11/12 smoke rounded-md mx-auto text-center flex flex-col relative justify-between">
	<!--Today - Date-->
	<header class="flex justify-between text-xs p-1">
		<span class="text-xs">Today</span>
		<small>{today.date}</small>
	</header>
	<!--Weather main condition-->
	<h2 class="text-md">
		{today.condition}
	</h2>
	<!--Temperature/image-->
	<div class="flex justify-evenly">
		<p class="z-10 w-1/2 text-7xl left-3 text-center relative">
			{today.temp}
			<strong class="text-xl absolute top-2 text-amber-500"> &#8451; </strong>
		</p>
		<div class="w-1/2 relative right-8">
			<img preload class="object-cover" src={today.image_src} alt="weather representation" />
		</div>
	</div>
	<!--Max/Min temperature indicators-->
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
	<!--Display city name and country-->
	<footer class="text-xs p-1">
		<i class="lni lni-map-marker" />
		<small class="tex">{today.name}</small>
	</footer>
</main>

<style>
	main {
		min-height: 35%;
	}
	img {
		width: 750px;
	}
	:global(.smoke) {
		background-image: radial-gradient(rgba(102 153 255 /0.1), rgba(0 0 0 /0.3));
	}
	@media (max-width: 700px) {
		p {
			text-shadow: 0.2rem 0.1rem 1rem #040450;
		}

		strong {
			text-shadow: 0.2rem 0.1rem 0.4rem #040450;
		}
	}
</style>
