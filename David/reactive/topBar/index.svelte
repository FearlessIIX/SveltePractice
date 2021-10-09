<script>
	let themeDropdown = {
		status: false,
		visibility: "hide"
	}
	let theme = "Light";
	
	function toggleDropdown() {
		themeDropdown.status = !themeDropdown.status;
		if (themeDropdown.visibility == "hide") {
			themeDropdown.visibility = "show"
		}
		else themeDropdown.visibility = "hide"
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
		<!-- {#if themeDropdown.visibility == "show"} -->
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
		<!-- {/if} -->
	</div>
</div>
<style>
    @import "./style.css";
    @import "./themes/light.css";
    @import "./themes/dark.css";
</style>
