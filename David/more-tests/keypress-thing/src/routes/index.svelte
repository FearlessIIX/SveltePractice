<script>
    let keyPressed = "";
    var contents = [""];
    function keyup() { keyPressed = ""; }
    function keydown(event) {
        // First Section
        if(event.key == " ") keyPressed = "space";
        else keyPressed = event.key;
        // Second Section
        if (event.key == "Shift" || event.key == "Backspace" || event.key == "Enter") {
            if (event.key == "Backspace") {
                contents = contents.slice(0, contents.length - 1);
            }
            else if (event.key == "Enter") {
                //TODO: add functionality for the enter button
                //perhaps some kind of line break or something??
            }
        }
        else contents += event.key;
    }
</script>
<svelte:window on:keyup={keyup} on:keydown={keydown}></svelte:window>
<div id="top" class="bg-gray-300 h-64 w-1/4 items-center flex justify-center">
    <span class="absolute ">Current Key</span>
    <div class="key-box">
        <span>{keyPressed}</span>
    </div>
</div>
<div id="bottom" class="bg-gray-300 h-64 w-screen items-center flex justify-center">
    <div class="text-box flex justify-center items-center">
        <span>{contents}</span>
    </div>
</div> 
<style>
    @import "./style.css";
</style>
