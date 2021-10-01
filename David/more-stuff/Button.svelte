<script>
    import { onClick } from "./Scripts/btnStuff";
</script>
<button class="btn" on:click="{onClick}">
    Press Me
</button>

<style>
    .btn {
        border: black solid 2px;
        background-color: gray;
        padding: 15px;
        border-radius: 15px;
        color:black;
        transition: background-color 0.4s, color 0.4s;

    }
    
    .btn:hover {
        background-color: lightgrey;
        color:rgb(100, 100, 100);
    }
</style>
