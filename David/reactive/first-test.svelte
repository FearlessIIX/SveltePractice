<script>
	let themeDropdown = {
		status: false,
		visibility: "hidden"
	}
	let theme = "Light";
	
	function toggleDropdown() {
		themeDropdown.status = !themeDropdown.status;
		if (themeDropdown.visibility == "hidden") {
			themeDropdown.visibility = "visible"
		}
		else themeDropdown.visibility = "hidden"
	}
	function toggleTheme() {
		if (theme == "Light") theme = "Dark"
		else theme = "Light";
	}
</script>
<div id="page">
	<div class="sticky">
<!-- 	Navigation Bar	 -->
		<div class="navbar {theme}">
			<div class="button {theme}">
				item
			</div>
			<div class="button {theme}">
				item
			</div>
			<div class="button {theme}">
				item
			</div>
			<div class="button {theme}" on:click={toggleDropdown}>
				Theme
			</div>
		</div>
<!-- 	Theme Selection box	 -->
		<div class="j-right {themeDropdown.visibility}">
			<div class="theme-selector {theme}">
				<h4>Theme</h4>
				<div id="t-buttons">
					<div class="t-button {theme}" on:click={toggleTheme}>
						{theme}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
	:global(body) {
		margin:0px;
		padding:0px;
	}
	#page {
		height:5000px;
		max-width:100vw;
	}
	.navbar {
		height:10vh;
		max-width:100vw;
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
	.sticky {
		  position: -webkit-sticky; /* Safari */
 			position: sticky;
  		top: 0;
	}
	.theme-selector {
		position:absolute;
		width:25vw;
		right:0px;
		border-top:hidden;
	}
	.j-right {
		transition: opacity 0.75s;
	}
	.hidden {
		opacity:0
	}
	.visible {
		opacity:100
	}
	.theme-selector h4 {
		margin-top:5px;
		text-align:center;
		text-decoration:underline;
	}
	#t-buttons {
		display:flex;
		align-items:center;
		justify-content:center;
	}
	.t-button {
		width:80%;
		height:7vh;
		border:solid;
		display:flex;
		justify-content:center;
		margin-bottom:5px;
		align-items:center;
		transition: all 0.5s;
	}
	.Light.navbar {
			border-bottom:rgb(150, 150, 150) solid 4px;
			background-color:lightgrey;
	}
	.Dark.navbar {
			border-bottom:rgb(50, 50, 50) solid 4px;
			background-color:rgb(100, 100, 100)
	}
	.Light.button:hover {
		background-color:rgb(235, 235, 235);
	}
	.Dark.button:hover {
		background-color:rgb(125, 125, 125);
	}
	.Light.theme-selector {
		background-color:rgb(235, 235, 235);
		border:rgb(150, 150, 150) solid 2px;
		border-top:hidden;
	}
	.Dark.theme-selector {
		background-color:rgb(100, 100, 100);
		border:rgb(50, 50, 50) solid 2px;
		border-top:hidden;
	}
	.Light.t-button {
		border:rgb(150, 150, 150) solid 2px;
	}
	.Dark.t-button {
		border:rgb(50, 50, 50) solid 2px;
	}
</style>
