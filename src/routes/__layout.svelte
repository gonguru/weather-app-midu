<script>
	import '../app.css';
	import SearchBar from '../components/search-bar.svelte';
	import { loading } from '../stores.js';
</script>

<head>
	<title>AngyeWeather</title>
</head>
<div class="h-screen font-outfit text-white relative overflow-y-scroll">
	<header>
		<h1 class="text-center p-3 text-slate-50 text-sm">Miduweather</h1>
		{#if !$loading}
			<SearchBar />
		{/if}
	</header>
	<slot />
</div>

<style>
	div {
		background-image: linear-gradient(135deg, #040450, #437ae7);
	}
</style>
