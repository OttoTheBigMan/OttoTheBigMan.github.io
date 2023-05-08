<script>
    import { writable } from 'svelte/store';

    export let invisible = true;
    export let createFunction = undefined;
    export let closeFunction = undefined;
    let title = "";
    
    const newList = {
        isMoving: false,
        title: title,
        cards: [],
        elements: []
    }
    function Create(){
        newList.title = JSON.parse(JSON.stringify(title));
        createFunction(newList);
        title = "";
    }
    function Close(){
        closeFunction();
        title = ""
    }
</script>

<div class="window" class:invisible={invisible}>
    <button id="closeButton" on:click={Close}></button>
    <h1>Create New List</h1>
    <input type="text" placeholder="Title goes here..." bind:value={title} on:submit={Create}>
    <button id="CreateButton" on:click={Create}>Create list</button>
</div>
<div class="screenShade" class:invisible={invisible}/>

<style>
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
        display: none;
        pointer-events: none;
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