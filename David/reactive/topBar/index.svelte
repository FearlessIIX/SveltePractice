<script>
	let themeDropdown = {
		status: false,
		visibility: "hide"
	}
	let theme = "Light";
	function alertTest() {
		var text = (themeDropdown.status == true) ? 
			"You know what I meant!!" : "Button Clicked!!";
		alert(text);
	}
	function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
	
	async function toggleDropdown() {
		if (themeDropdown.visibility == "hide") {
			themeDropdown.visibility = "show"
			themeDropdown.status = true;
		}
		else {
			themeDropdown.visibility = "hide";-
			await sleep(1500);
			if (!(themeDropdown.visibility == "show")) {
				themeDropdown.status = false;
			}
		}
	}
	function toggleTheme() {
		if (themeDropdown.visibility == "show") {
			if (theme == "Light") theme = "Dark"
			else {
				theme = "Light";
			}
		}
	}
</script>
<div id="page">
	<div class="sticky {theme}">
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
			{#if themeDropdown.status}
			<div class="theme-selector {theme}">
				<h4>Theme</h4>
				<div id="t-buttons">
					<div class="t-button {theme}" on:click={toggleTheme}>
                        {theme}
					</div>
				</div>
			</div>
			{/if}
		</div>
	</div>
<!--	Page Content	-->
	<div class="page-content {theme}">
		<div>
			<button class="btn-test {theme}" on:click={alertTest}>A clickable button</button>
			<p class="arrow flex float-right m-7">This button is able to be pressed<br>
				when the theme selector is hidden</p>
			<p class="flex float-right m-7">Normally these elements interfere with<br>
				the rest of the page when used incorrectly</p>
			<p class="flex float-right m-7">The theme selector is an absolute<br>
				positoned element, meaning it goes<br>
				over top of the other elements</p>
		</div>
	</div>
</div>
<style>
    @import "./style.css";
    @import "./themes/light.css";
    @import "./themes/dark.css";
</style>
