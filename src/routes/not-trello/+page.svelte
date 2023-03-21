<script>
    let mouse = {x: 0, y: 0}
    let currentList = -1;
    let lists = [
        {
            isMoving: false,
            title: "Todo",
            cards: [
                {
                    type: "text",
                    value: "Hello there"
                },
                {
                    type: "text",
                    value: "HEHEHEHAW"
                }
            ],
            element: undefined
        },
        {
            isMoving: false,
            title: "Done",
            cards: [
                {
                    type: "text",
                    value: "Absolutely nothing"
                },
                {
                    type: "image",
                    value: "/icons/delete.png"
                },
                {
                    type: "link",
                    path: "/",
                    value: "Go back to the homepage :)"
                }
            ],
            element: undefined
        }
    ]
    function UpdateMousePosition(event){
        mouse = {x: event.clientX, y: event.clientY};
        if(currentList != -1){
            console.log(mouse)
            lists[currentList].element.style.left = mouse.x + "px";
            lists[currentList].element.style.top = mouse.y + "px";
        }
    }
    function Move(i){
        lists[i].isMoving = !lists[i].isMoving;
        currentList = lists[i].isMoving ? i : -1;
        lists = lists;
        
    }
</script>

<main class="bg" on:mousemove={UpdateMousePosition}>
    <!-- Logo: -->
    <div class="logo">
        <img src="/logo.png" alt="logo">
        <p>Not Trello</p>
    </div>
    <!-- List in which new cards are made: -->
    <div class="section new"></div>
    <!-- Section with all the lists: -->
    <div class="section main">
        {#each lists as list, i}
            <div class="listParent" class:moving={list.isMoving} bind:this={list.element}>
                <div class="topOfList">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img class="icon" src="/icons/moveicon.png" alt="move" on:click={() => {Move(i)}} on:keypress={() => {Move(i)}}>
                    <h1>{list.title}</h1>
                    <img class="icon" id="deleteButton" src="/icons/delete.png" alt="delete">
                </div>
                
                <div class="list">
                    {#each list.cards as card}
                        <div class="element">
                            {#if card.type == "text"}
                                <p>{card.value}</p>
                            {:else if card.type == "link"}
                                <a href="{card.path}">{card.value}</a>
                            {:else if card.type == "image"}
                                <img src="{card.value}" alt="bollar">
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <!-- Settings menu with save and load: -->
    <div class="section">

    </div>
</main>

<style>
    :root {
        --bg-color: #1f2937;
        --bg-accent: #374151;
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
    .bg {
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        max-height: 100%;

        overflow: hidden;

        background-color: var(--bg-accent);
        gap: 4px;
        display: grid;
        grid-template-columns: 22% 78%;
        grid-template-rows: 12vh 63vh 25vh;

        color: var(--text-col);
        font-family: ubuntu;

    }
    .section {
        background-color: var(--bg-color);
    }
    .main {
        grid-row-start: 1;
        grid-row-end: span 2;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;
        overflow-x: auto;

        box-sizing: border-box;
        padding: 35px;
    }
    .element {
        background-color: var(--bg-color);
        border-radius: 10px;
        width: 100%;
        min-height: 75px;
        max-height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        padding: 5px;
    }
    .element img {
        width: 100%;
    }
    
    .listParent {
        height: 100%;
        background-color: var(--bg-accent);
        aspect-ratio: 10 / 16;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
    }
    .moving {
        position: absolute;
        height: 75%;
        transform: translate(-45px, -45px);
        left: 0;
    }
    .topOfList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 0;
        margin-bottom: 10px;
    }
    .icon {
        aspect-ratio: 1;
        height: 60px;
    }
    #deleteButton {
        right: 15px;
        left: auto;
    }
    .list {
        border: 2px solid var(--accent-col);
        border-radius: 10px;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        overflow-y: auto;

        box-sizing: border-box;
        padding: 10px;
    }


    .new {
        grid-row-start: 2;
        grid-row-end: span 3;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .logo {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background-color: var(--bg-color);
        box-sizing: border-box;

        height: 12vh;

        font-size: 5vh;
    }
    .logo img {
        aspect-ratio: 1;
        height: 80%;
        border-radius: 10px;
    }
</style>