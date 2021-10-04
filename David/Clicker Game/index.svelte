<script>
    let num = 0;
    let cId = 0;
    let gAmt = 1;
    let gAmtC = 25;
    let reb = 0;
    let cheat = false;
    // function handleMainClick() {
    //     if (cId == 0) num++;
    // }
    const downPressed = event => {
        if (event.type == "keydown") {
            if (cheat) {
                if (event.key === ' ') num++;
            }
        }
        else if (event.key === ' ') num++;
    }
    function btnClick() {
        if (this.id == "upg") {
            if (cId == 1) cId = 0;
            else {
                cId = 1;
                if (cId == 0) {
                    num--;
                }
            }
        }
        else if (this.id == "hlp") {
            if (cId == 2) cId = 0;
            else {
                cId = 2;
                if (cId == 0) {
                    num--;
                }
            }
        }
        else if (this.id == "reb") {
            if (cId == 3) cId = 0;
            else {
                cId = 3;
                if (cId == 0) {
                    num--;
                }
            }
        }else if (this.id == "sav") {
            if (cId == 4) cId = 0;
            else {
                cId = 4;
                if (cId == 0) {
                    num--;
                }
            }
        }
    }
</script>
<svelte:window  on:keyup={downPressed} on:keydown={downPressed}></svelte:window>
<button id="hidden" class="absolute" on:click="{e => cheat = !cheat}"></button>
<div id="outer">
    <div id="frame">
        <div id="buttons">
            <button id="upg" on:click={btnClick}>Upgrades</button>
            <button id="reb" on:click={btnClick}>Rebirth</button>
            <button id="sav" on:click={btnClick}>Save</button>
            <button id="hlp" on:click={btnClick}>Help</button>
        </div>
        {#if cId == 0}
            <div id="cZero">
                <div>
                    <div id="reb">Rebirth Count: {reb}</div>
                    <div id="gAm">Gain Amount: {gAmt}</div>
                </div>
                <ul>
                    <li><div id="bal">Current Balance: {num}</div></li>
                    <li><button>Click Me</button></li>
                </ul>
            </div>
        {/if}
    </div>
</div>
<style>
    @import "./Styles/mainStyle.css";
    @import "./Styles/buttonStyle.css";
</style>
