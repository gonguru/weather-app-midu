<script>
	import { msg } from '../stores.js';
</script>

<div class="flex h-2/3 items-center justify-center">
	<div class="bg w-52 h-52">
		<div class="absolute w-52 h-52">
			<img preload src="/img/earth_3d.gif" alt="spinner" />
		</div>
		<div class="spinner w-52 h-52" />
		<p class="mt-10 text-center">{$msg}</p>
	</div>
</div>

<style>
	.bg {
		grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
		background-image: radial-gradient(white 43%, transparent 48%);
	}

	.spinner {
		background-color: rgb(255, 255, 255);

		border-radius: 100%;
		-webkit-animation: sk-scaleout 1s infinite ease-in-out;
		animation: sk-scaleout 1s infinite ease-in-out;
	}

	@-webkit-keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			opacity: 0;
		}
	}

	@keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
