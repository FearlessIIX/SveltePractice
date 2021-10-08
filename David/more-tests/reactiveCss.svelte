<script>
	let styleOf = "red"
	function click() {
		if (styleOf == "red") {
			styleOf = "blue";
		}
		else styleOf = "red";
	}
</script>
<svelte:window on:click={click}/>
<p id="transition" class={styleOf}>
	This is text
</p>

<style>
	.red { color:red; }
	.blue { color:blue; }
	p { transition:color 2s; }
</style>
