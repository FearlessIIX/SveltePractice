<script>
	let m = { x: 0, y: 0 };
	let v = false

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:mousemove={handleMousemove} >
	{#if v}
	<br><br><br><br><br><br><br><br><br><br><br>
	<p on:mouseover="{e => v = !v}" on:focus>
		The mouse position is {m.x} x {m.y}
	</p>
	
	{:else}
	<p on:mouseover="{e => v = !v}" on:focus>
		The mouse position is {m.x} x {m.y}
	</p>
	
	{/if}
</div>

<style>
	div { width: 100%; height: 100%; }
	p {
		padding: 20px;
	}
</style>
