<script>
    let mouse = {x: 0, y: 0}
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
                    type: "link",
                    path: "/",
                    value: "HEHEHEHAW"
                }
            ],
            element: undefined
        }
    ]
    function UpdateMousePosition(event){
        mouse = {x: event.clientX, y: event.clientY};
    }
    function Move(array, i){
        array[i].isMoving = !array[i].isMoving;
        console.log(array[i].isMoving)
        // let frames = setInterval(() => {
        //     if(!array[i].isMoving){
        //         clearInterval(frames);
        //     }
        //     // array[i].element.style.left = mouse.x;
        //     // array[i].element.style.top = mouse.y;

        // }, 1000 / 60)
    }
</script>

<main class="bg">
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
            <div class="listParent {list.isMoving ? "moving" : ""}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img src="/icons/moveicon.png" alt="move" on:click={() => {Move(lists, i)}} on:keypress={() => {Move(lists, i)}}>
                <img id="deleteButton" src="/icons/delete.png" alt="delete">
                <h1>{list.title}</h1>
                <div class="list">
                    {#each list.cards as card}
                        <div class="element">

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
        grid-template-columns: 25% auto;
        grid-template-rows: 12vh auto 30%;

        color: var(--text-col);
        font-family: ubuntu;

    }
    .section {
        background-color: var(--bg-color);
    }
    .main {
        grid-row-start: 1;
        grid-row-end: span 3;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;
        overflow-x: auto;

        box-sizing: border-box;
        padding: 35px;
    }
    .moving {
        background-color: var(--bg-accent);
    }
    .listParent {
        position: relative;

        height: 100%;
        background-color: var(--bg-accent);
        width: 30%;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
    }
    
    .listParent img {
        left: 15px;
        position: absolute;
        aspect-ratio: 1;
        width: 15%;
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
        overflow-y: auto;

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