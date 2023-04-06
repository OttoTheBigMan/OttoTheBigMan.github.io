<script>
    export let visible = false;
    export let message = "Are you sure you want to delete this item?";

    export let confirmFunc, denyFunc;
    export let funcArg;
    function Confirm(){
        confirmFunc(funcArg);
    }
    function Deny(){
        denyFunc();
    }
</script>

    <div class:invis={!visible}>
        <div class="window">
            <h1>{message}</h1>
            <div class="buttons">
                <button on:click={Confirm}>Yes</button>
                <button on:click={Deny}>No</button>
            </div>
        </div>
        <div class="screenShade"/>
    </div>

<style>
    .invis {
        display: none;
    }
    /* Copied from +page.svelte in the not-trello folder */
    :root {
        --bg-color: #1f2937;
        --bg-accent: #374151;
        --bg-accent-2: #29313D;
        --prim-col: #fbbf24;
        --sec-col: #fcd34d;
        --accent-col: #0891b2;
        --text-col: #E0D6C8;
        
        /* Constants for changing theme */
        --light-bg: #fff;
        --light-bg-accent: #d1d5db;
        --dark-bg: #1f2937;
        --dark-bg-accent: #374151;
        --dark-text: #E0D6C8;
        --light-text: black;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10%;
        width: 100%;
    }
    button {
        background-color: var(--bg-accent);
        width: 30%;
        aspect-ratio: 3;
        border: none;
        border-radius: 10px;
        box-shadow: 3px 3px var(--bg-accent-2);
        color: var(--text-col);
        font-size: larger;
    }
    button:active {
        transform: translate(3px, 3px);
        box-shadow: none;
    }
    .window {
        font-family: ubuntu;
        z-index: 32767;
        position: absolute;
        text-align: center;
        background-color: var(--bg-color);
        width: 45%;
        aspect-ratio: 16 / 9;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--text-col);
        border-radius: 10px;

        box-sizing: border-box;
        padding: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .screenShade {
        z-index: 32766;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
</style>