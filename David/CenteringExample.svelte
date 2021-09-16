<!--The centered class is used to set default settings for centering-->
<!--Each div is given a class so they may receive unique borders-->
<div id="first" class="centered">
	<div id="seperate" class="centered">
		<a href="https://css-tricks.com/centering-css-complete-guide/">
			A guide on Centering in CSS
		</a>
	</div>
	<div id="second" class="centered">
		<div id="third" class="centered">
			<div id="fourth" class="centered">
			</div>
		</div>
	</div>
</div>

<style>
	#first {
		border: solid;
		border-color: black;
		width: inherit; /* is equal to width of page, or 100%. */
		height: 300px;
	}
	#second{
		border: solid;
		border-color: blue;
		width: 50%;
		height: 50%;
	}
	#third {
		border: solid;
		border-color: red;
		width: 50%;
		height: 50%;
	}
	#fourth {
		border: solid;
		border-color: green;
		width: 50%;
		height: 50%;
	}
	.centered {
		/* Used to center the divs inside of one another with a flexbox. */
		/* Reqruires at least one Outer div element, the out-most element */
		/* will not be centered on the page. */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#seperate {
		border: solid;
		border-color: rgb(175, 175, 175);
		width: 75%;
		height: 30px;
		
		/* Sets the postition of the element to be fixed, meaning it will be */
		/* placed the same regardless of other elements on the page. */
		position: fixed;
		top: 25px;
		
		text-decoration: underline;
	}
</style>
