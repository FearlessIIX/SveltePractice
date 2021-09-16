<script>
	let num = 0;
	
	function add() {
		num++		//basic add function
	}
	function sub() {
		num--		//basic subtract function
	}
</script>

<!--This div contains the entire page-->
<div id = "page">
	<h4>
		Press the button to increase
	</h4>
	<!--This div contains only the two buttons-->
	<div id="buttons">
		<span><button on:click={add}>
				Increase
			</button> | <button on:click={sub}>
				Decrease
		</button></span>
	</div>
	<!--This div contains the information about the number-->
	<div id="info">
		<!--This div is used to center inside the previous div-->
		<div id="center">
			<p>
				Number: {num}
			</p>
			<!--If block determines which <p> to display-->
			{#if num > 10}
				<p>{num} is greater than 10<br></p>
			{:else if 5 > num}
				<p>{num} is less than 5</p>
			{:else}
				<p>{num} is between 5 and 10</p>
			{/if}
	
			<!--These two ifs determine if the number is divisible by three or five-->
			{#if num % 2 == 0 && num != 0}
				<p>
			{num} is divisible by two
				</p>
			{:else}
				<p>
					{num} is not divisible by two
				</p>
			{/if}
			{#if num % 5 == 0 && num != 0}
				<p>
			{num} is divisible by five
				</p>
			{:else}
				<p>
					{num} is not divisible by five
				</p>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Styling for the entire page */
	#page {
		background: rgb(170, 170, 170);
		padding: 10px;
		width: 300px;
		height: 425px;
		border: solid;
		border-color: grey;
		text-align: center;
		color: white;
	}
	/* Styling for just the individual buttons */
	button {
		background: rgb(190, 60, 10);
		border: solid;
		border-color: white;
	}
	/* Styling for the div containing both buttons */
	#buttons {
		padding-left: 10px;
	}
	/* used to resize the element width */
	#info {
		display: flex;
		justify-content: center;
	}
	/* Used to place the text in the center of the resized #info */
	#center {
		margin: 0, auto;
		width: 170px;
		height: 250px;
		border: solid;
		padding: 5px;
	}
</style>
