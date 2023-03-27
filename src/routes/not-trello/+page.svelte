<script>
    import CreateNew from "../../lib/components/CreateNew.svelte";

    let mouse = {x: 0, y: 0}
    let currentList = -1;
    let listElements = [undefined, undefined, undefined]
    let lists = [
        {
            isMoving: false,
            title: "Todo",
            cards: [
                {
                    moving: false,
                    type: "text",
                    value: "Hello there"
                },
                {
                    moving: false,
                    type: "text",
                    value: "HEHEHEHAW"
                }
            ],
            elements: []
        },
        {
            isMoving: false,
            title: "yup :)",
            cards: [
                {
                    moving: false,
                    type: "text",
                    value: "Hello there"
                }
            ],
            elements: []
        },
        {
            isMoving: false,
            title: "Done",
            cards: [
                {
                    moving: false,
                    type: "text",
                    value: "Absolutely nothing"
                },
                {
                    moving: false,
                    type: "text",
                    value: "You are the mega gay"
                },
                {
                    moving: false,
                    type: "image",
                    value: "/icons/delete.png"
                },
                {
                    moving: false,
                    type: "link",
                    path: "/",
                    value: "Go back to the homepage :)"
                }
            ],
            elements: []
        }
    ]
    function MoveInArray(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        lists = arr;
    }
    function GetLeftValue(element){
        return element.getBoundingClientRect().left;
    }
    function GetTopValue(element){
        return element.getBoundingClientRect().top;
    }
    function GetClosestIndexInArray(val, arr){
        let curr = arr[0];
        arr.forEach(num => {
            if(Math.abs(val - num) < Math.abs (val - curr)){
                curr = num;
            }
        });
        return arr.indexOf(curr);
    }
    function UpdateMousePosition(event){
        mouse = {x: event.clientX, y: event.clientY};
        if(currentList != -1 && lists[currentList].isMoving){
            closestList = GetClosestIndexInArray(mouse.x, listPositions)
            listElements[currentList].style.left = mouse.x + "px";
            listElements[currentList].style.top = mouse.y + "px";  
        }
    }
    let listPositions = []
    let closestList = -1;
    let oldListPosition = -1;
    function Move(i){
        if(currentList != -1 && !lists[i].isMoving){
            return;
        }
        //When you click it while not moving

        if(!lists[i].isMoving){
            lists[i].isMoving = true;
            currentList = i;
            listPositions = [];
            oldListPosition = i;
            for(let j = 0; j < lists.length; j++){
                listPositions.push(GetLeftValue(listElements[j]))
            }
            listPositions.sort((a, b) => a - b)
            closestList = GetClosestIndexInArray(mouse.x, listPositions)
            listElements[i].style.left = mouse.x + "px";
            listElements[i].style.top = mouse.y + "px";  
        }
        //When you click it in place
        else {
            lists[i].isMoving = false;
            MoveInArray(lists, oldListPosition, closestList)
            i = closestList;
            currentList = -1;
            closestList = -1;

            oldListPosition = -1;
        }
        lists = lists;
    }
    let currentCard = [-1, -1]
    let closestCard = [-1, -1]
    function MoveCard(i, j){
        const card = lists[i].cards[j];

    }
    function DeleteList(i){
        
    }

    let newType = "text";
    let newVisible = false;
    function CreateCard(type){
        newType = type;
        newVisible = true;
    }
</script>

<main class="bg" on:mousemove={UpdateMousePosition}>
    <!-- Logo: -->
    <div class="logo">
        <img src="/logo.png" alt="logo">
        <p>NoTrello</p>
    </div>
    <!-- List in which new cards are made: -->
    <div class="section new">
        <button class="createNew">Create text card</button>
        <button class="createNew">Create image card</button>
        <button class="createNew">Create link card</button>
        <CreateNew type={newType} invisible={!newVisible}></CreateNew>
    </div>
    <!-- Section with all the lists: -->
    <div class="section main">
        {#each lists as list, i}
            <div class="listParent" class:moving={list.isMoving} bind:this={listElements[i]}>
                <div class="topOfList">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img class="icon" src="/icons/moveicon.png" alt="move" on:click={() => {Move(i)}} on:keypress={() => {Move(i)}}>
                    <h1>{list.title}</h1>
                    <img class="icon" id="deleteButton" src="/icons/delete.png" alt="delete" on:click={() => {DeleteList(i)}} on:keypress={() => {DeleteList(i)}}>
                </div>
                
                <div class="list">
                    {#each list.cards as card, j}
                        <div class="element" class:movingCard={card.moving} bind:this={list.elements[j]}>
                            {#if card.type == "text"}
                                <p>{card.value}</p>
                            {:else if card.type == "link"}
                                <a href="{card.path}">{card.value}</a>
                            {:else if card.type == "image"}
                                <img src="{card.value}" alt="No errors?">
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
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        padding: 5px;
    }
    .element img {
        width: 100%;
        pointer-events: none;
    }
    
    .listParent {
        height: 100%;
        background-color: var(--bg-accent);
        aspect-ratio: 10 / 16;
        width: auto;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        text-align: center;
        padding: 15px;
    }
    .movingCard {
        position: absolute;
        transform: translate(-50%, -50%)
    }
    .moving {
        position: absolute;
        height: 60vh;
        width: auto;
        transform: translate(-45px, -45px);
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
        user-select: none;

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
    ::-webkit-scrollbar {
        background-color: var(--bg-accent-2);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--dark-bg);
        border: 2px solid var(--bg-accent-2);
    }


    .new {
        grid-row-start: 2;
        grid-row-end: span 3;

        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        box-sizing: border-box;
        padding: 10px;
    }
    .createNew {
        width: 100%;
        aspect-ratio: 4 / 1;

        color: var(--text-col);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        background-color: var(--bg-accent);
        border: none;

        font-size: x-large;
    }
    .createNew:hover {
        background-color: var(--bg-accent-2);
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