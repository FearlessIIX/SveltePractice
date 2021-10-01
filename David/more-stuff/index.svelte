<script>
    import Button from "./Button.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div id="thing">
    <Button></Button><Button></Button><Button></Button>
</div>
<style>
    #thing {
        display:flex;
        justify-content: space-between;
        width: 75vw;
        left:12.5vw;
        position: absolute;
    }
</style>
