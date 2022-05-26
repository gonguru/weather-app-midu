<script>
	export let message = 'This is an example message';
	export let border = 'border-red-600';
</script>

<div class={`text-center left-0 right-0 mx-auto absolute w-5/6 p-1 rounded-md border-2 ${border}`}>
	{message}
</div>
