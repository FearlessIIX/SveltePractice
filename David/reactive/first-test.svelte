<script>
	let themeDropdown = false;
</script>
<div id="page">
	<div class="sticky">
		<div class="navbar">
			<div class="button">
				item
			</div>
			<div class="button">
				item
			</div>
			<div class="button">
				item
			</div>
			<div class="button">
				Theme
			</div>
		</div>
	</div>
</div>
<style>
	#page {
		width:100vw;
		height:500vh;
	}
	.navbar {
		height:10vh;
		width:100%;
		background-color:lightgrey;
		border-bottom:rgb(50, 50, 50) solid 5px;
		padding:5px;
		display:flex;
		justify-content: space-around;
	}
	.button {
		height:95%;
		width:17.5%;
		display:flex;
		justify-content:center;
		align-items:center;
		border:black solid 1px;
		transition: background-color 0.7s;
	}
	.button:hover {
		background-color:rgb(235, 235, 235);
	}
	.sticky {
		  position: -webkit-sticky; /* Safari */
 			position: sticky;
  		top: 0;
	}
</style>
