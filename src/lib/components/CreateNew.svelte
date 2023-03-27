<script>
    export let type;
    export let invisible = true;
    const newCard = {
                        type: undefined,
                        path: undefined,
                        value: undefined
                    }
</script>

<div class="window" class:invisible={invisible}>
    <h1>Create new card</h1>
    {#if type=="image"}
        <input type="text" placeholder="Paste image URL..." bind:value={newCard.value}/>
    {:else if type=="link"}
        <div id="hehehehaw">
            <input type="text" placeholder="Link url goes here..." bind:value={newCard.path}>
            <input type="text" placeholder="Link text goes here..." bind:value={newCard.value}>
        </div>
    {:else if type=="text"}
        <input type="text" placeholder="What to do..." bind:value={newCard.value}>
    {/if}
    <button id="CreateButton">Create card</button>
</div>

<style>
    
    .window {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background-color: rgb(62, 68, 73);
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
    }
    #hehehehaw {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    #CreateButton {
        width: 20%;
        aspect-ratio: 3 / 1;

        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px rgba(0,0,0,0.5);
    }
    #CreateButton:active {
        transform: translate(3px, 3px);
        box-shadow: none;
    }
    input[type="text"] {
        width: 75%;
        aspect-ratio: 15 / 1;
        border-radius: 10px;
        border: none;
        box-shadow: 3px 3px rgba(0,0,0,0.5);
        text-align: center;
    }
</style>