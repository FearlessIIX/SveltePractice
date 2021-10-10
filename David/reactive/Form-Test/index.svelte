<script>
    let name = "";
    let fcolor = "";
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
    function submit(e) {
        name = e.target[0].value;
        fcolor = e.target[1].value;
        var ret = `Name : ${name}\n Favorite Color : ${fcolor}`;
        alert(ret);
        sleep(5000);
    }
</script>
<div class="w-screen h-screen flex justify-center items-center">
    <div class="form-box text-center">
        <h1 class="m-5 underline"><strong>Please provide information</strong></h1>
        <div class="form">
            <form on:submit={submit}>
                <div class="input-box">
                    <div class="input">
                        <label class="m-5" for="name">Name</label>
                        <input type="text" id="name" name="name" value=""/>
                    </div>
                </div>
                <div class="input-box">
                    
                    <div class="input">
                        <label class="m-5" for="fav-color">Favorite Color</label>
                        <input type="text" id="fav-color" name="fav-color" value="">
                    </div>
                </div>
                <div class="btn-submit">
                    <button type="submit"> submit</button>
                </div>
            </form>
            <p>
                {#if !(name == "")}Name : {name}{/if}<br>
                {#if !(fcolor == "")}Favorite Color : {fcolor}{/if}
            </p>
        </div>
    </div>
</div>
<style>
    @import "./style.css";
</style>