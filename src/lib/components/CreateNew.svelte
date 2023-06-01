<script>
    export let type;
    export let invisible = true;
    export let createFunction = undefined;
    export let closeFunction = undefined;
    const newCard = {
                        moving: true,
                        type: type,
                        path: undefined,
                        value: ""
                    }
    function Create(event){
        event.preventDefault();
        newCard.type = type;
        createFunction(newCard);
        newCard.path = ""
        newCard.value = ""
    }
    function Close(){
        newCard.type = type;
        closeFunction();
        newCard.value = ""
        newCard.path = ""
    }
</script>

<div class="window" class:invisible={invisible}>
    <button id="closeButton" on:click={Close}></button>
    <h1>Create new card</h1>
    <form on:submit={Create}>
        {#if type=="image"}
            <input type="text" placeholder="Paste image URL..." bind:value={newCard.value}/>
        {:else if type=="link"}
            <input type="text" placeholder="Link url goes here..." bind:value={newCard.path}>
            <input type="text" placeholder="Link text goes here..." bind:value={newCard.value}>
        {:else if type=="text"}
            <input type="text" placeholder="What to do..." bind:value={newCard.value}>
        {/if}
        <button id="CreateButton" type="submit">Create card</button>
    </form>
</div>
<div class="screenShade" class:invisible={invisible}/>

<style>
    * {
        z-index: 32767;
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
    form {
        width: 100%;
        height: 100%;
        gap: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;

        position: relative;
    }
    #closeButton {
        background-color: transparent;
        background-image: url(icons/close.png);
        background-size: 100%;
        width: 75px;
        height: 75px;
        border: none;
        border-radius: 100%;

        position: absolute;
        top: 15px;
        left: 15px;
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
    .window {
        color: var(--text-col);
        z-index: 32767;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background-color: var(--bg-color);
        border-radius: 10px;
        aspect-ratio: 16 / 10;
        width: 60vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;
        padding: 15px;
    }
    .invisible {
        pointer-events: none;
        display: none;
    }
    #CreateButton {
        width: 20%;
        aspect-ratio: 3 / 1;
        color: var(--text-col);
        border-radius: 10px;
        border: none;
        background-color: var(--bg-accent-2);
        font-size: larger;
        box-shadow: 3px 3px rgba(0,0,0,0.5);
        position: absolute;
        bottom: 0;
    }
    #CreateButton:active {
        transform: translate(3px, 3px);
        box-shadow: none;
    }
    input[type="text"] {
        font-size: larger;
        background-color: var(--bg-accent-2);
        color: var(--text-col);
        width: 75%;
        aspect-ratio: 15 / 1;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px rgba(0,0,0,0.5);
        text-align: center;
    }
</style>