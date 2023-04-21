<script>
    import { writable } from 'svelte/store';
    import CreateNew from "../../lib/components/CreateNew.svelte";

    let mouse = {x: 0, y: 0}
    let currentList = -1;
    let listElements = []
    let lists = [
        writable({
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
        }),
        writable({
            isMoving: false,
            title: "yup :)",
            cards: [
                {
                    moving: false,
                    type: "text",
                    value: "I think Moto moto likes you"
                }
            ],
            elements: []
        }),
        writable({
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
                    value: "What is this"
                },
                {
                    moving: false,
                    type: "image",
                    value: "https://www.xfire.com/wp-content/uploads/2022/08/cropped-walter-white-might-be-headed-to-multiversus-8.jpg.webp"
                },
                {
                    moving: false,
                    type: "link",
                    path: "/",
                    value: "Go back to the homepage :)"
                }
            ],
            elements: []
        })
    ]
    lists.forEach((list, i) => {
        list.subscribe(value => {
            lists[i] = value;
        });
    }); 
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
    function GetBottomValue(element){
        return element.getBoundingClientRect().bottom;
    }
    function GetElementWidth(element){
        return element.getBoundingClientRect().width;
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
    function MouseWithinRadius(x, y, radius){
        const distX = (mouse.x - x) * (mouse.x - x);
        const distY = (mouse.y - y) * (mouse.y - y);
        return distX + distY <= radius * radius;
    }
    function UpdateMousePosition(event){
        mouse = {x: event.clientX, y: event.clientY};
        deleteCardHover = MouseWithinRadius(75 + GetLeftValue(deleteCardElement), 75 + GetTopValue(deleteCardElement), 75)
        if(currentList != -1 && lists[currentList].isMoving){
            closestList = GetClosestIndexInArray(mouse.x, listPositions)
            listElements[currentList].style.left = mouse.x + "px";
            listElements[currentList].style.top = mouse.y + "px";  
        }
        if(cardIsMoving && lists[currentCard[0]].cards[currentCard[1]].moving){
            closestList = GetClosestIndexInArray(mouse.x, listPositions)
            lists[currentCard[0]].elements[currentCard[1]].style.left = mouse.x + "px";
            lists[currentCard[0]].elements[currentCard[1]].style.top = mouse.y + "px";
            closestCard[0] = GetClosestIndexInArray(mouse.x, listPositions)
            const arr = []
            for (let i = 0; i < lists[closestCard[0]].elements.length; i++) {
                
                if(lists[closestCard[0]].elements[i] != null){
                    if(lists[closestCard[0]].elements[i].classList.contains("movingCard")){
                        continue;
                    }
                    arr.push(GetTopValue(lists[closestCard[0]].elements[i]) - 5);
                    if(lists[closestCard[0]].elements.length - i == 1){
                        arr.push(GetBottomValue(lists[closestCard[0]].elements[i]) + 5)
                    }
                }
                
            }
            arr.sort((a,b) => a - b)
            closestCard[1] = GetClosestIndexInArray(mouse.y, arr)

        }
    }

    function GenerateListPositions(){

        listPositions = [];
        for(let j = 0; j < lists.length; j++){
            listPositions.push(GetLeftValue(listElements[j]))
        }
        listPositions.sort((a, b) => a - b)
    }
    let listPositions = []
    let closestList = -1;
    let oldListPosition = -1;
    function Move(i){
        if(currentList != -1 && !lists[i].isMoving || cardIsMoving){
            return;
        }
        //When you click it while not moving

        if(!lists[i].isMoving){
            lists[i].isMoving = true;
            currentList = i;
            oldListPosition = i;
            GenerateListPositions()
            closestList = GetClosestIndexInArray(mouse.x, listPositions)
            listElements[i].style.left = mouse.x + "px";
            listElements[i].style.top = mouse.y + "px";  
        }
        //When you click it in place
        else {
            if(deleteCardHover){
                DeleteList(i)
                return;
            }
            lists[i].isMoving = false;
            MoveInArray(lists, oldListPosition, closestList)
            i = closestList;
            currentList = -1;
            closestList = -1;

            oldListPosition = -1;
        }
        lists = lists;
    }
    let cardIsMoving = false;

    let currentCard = [-1, -1]
    let closestCard = [-1, -1]
    function MoveCard(i, j){
        if(lists[i].cards[j].moving != cardIsMoving){
            return;
        }
        if(!lists[i].cards[j].moving){
            cardAdded();
            lists[i].cards[j].moving = true;
            GenerateListPositions()
            for (let k = 0; k < listPositions.length; k++) {
                listPositions[k] += GetElementWidth(listElements[k]) / 2;
            }
            currentCard = [i, j];
            cardIsMoving = true;

            lists[currentCard[0]].elements[currentCard[1]].style.left = mouse.x + "px";
            lists[currentCard[0]].elements[currentCard[1]].style.top = mouse.y + "px";

            closestCard[0] = GetClosestIndexInArray(mouse.x, listPositions)
            const arr = []
            for (let i = 0; i < lists[closestCard[0]].elements.length; i++) {
                if(lists[closestCard[0]].elements[i].classList.contains("movingCard")){
                    continue;
                }
                if(lists[closestCard[0]].elements[i] != null){
                    arr.push(GetTopValue(lists[closestCard[0]].elements[i]));
                }
                if(lists[closestCard[0]].elements.length - i == 1){
                    arr.push(GetBottomValue(lists[closestCard[0]].elements[i]) + 10)
                }
            }
            arr.sort((a,b) => a - b)
            closestCard[1] = GetClosestIndexInArray(mouse.y, arr)
        }
        else if(lists[i].cards[j].moving){
            //Snap it to the closest card position.

            if(deleteCardHover){
                DeleteCard(i, j);
                return;
            }

            lists[i].cards[j].moving = false;
            cardIsMoving = false;
            const el = lists[i].cards.splice(j, 1);
            lists[i].cards = lists[i].cards
            lists[closestCard[0]].cards.splice(closestCard[1], 0, ...el)
            lists[closestCard[0]].cards = lists[closestCard[0]].cards;
            lists = lists;
            currentCard = [-1, -1]
        }
        
    }
    function cardAdded() {

        // // update the bind:this values in the list
        // const elements = listElements[listIndex].querySelectorAll(".element");
        // lists[listIndex].elements = [...elements];

        // update the bind:this values in all the lists
        for (let i = 0; i < listElements.length; i++) {
            if(!listElements[i]){
                continue
            }
            const elements = listElements[i].querySelectorAll(".element");
            lists[i].elements = [...elements];
        }
    }
    let deleteCardHover = false;
    let deleteCardElement = null;
    function DeleteCard(i, j){
        lists[i].cards.splice(j, 1)
        cardAdded();
        cardIsMoving = false;
        currentCard = [-1, -1]
        lists = lists;
    }
    let listDeleteIndex = -1;
    let listDelVisible = false;
    function DeleteList(i){
        listDelVisible = false;
        lists[i].isMoving = false;
        
        lists.splice(i, 1);

        listElements.splice(i, 1);
        currentList = -1;
        lists = lists;
        cardAdded();

    }
    let newType = "text";
    let newVisible = false;
    function CreateCard(type){
        if(lists.length == 0){
            alert("You are obligated to create a list before creating a card.")
            return;
        }
        newType = type;
        newVisible = true;
    }
    function CloseCreateMenu(){
        newVisible = false;
    }
    function AddCard(card){
        newVisible = false;
        card.moving = false;
        lists[lists.length - 1].cards.push(JSON.parse(JSON.stringify(card)));
        lists = lists;
        cardAdded()
        MoveCard(lists.length - 1, lists[lists.length - 1].cards.length - 1)
    }
</script>

<main class="bg" on:mousemove={UpdateMousePosition}>
    <!-- Logo: -->
    <div class="logo">
        <img src="/logo.png" alt="logo">
        <p>Not Trello</p>
    </div>
    <!-- List in which new cards are made: -->
    <div class="section new">
        <button class="createNew" on:click={() => {CreateCard("text")}}>Create text card</button>
        <button class="createNew" on:click={() => {CreateCard("image")}}>Create image card</button>
        <button class="createNew" on:click={() => {CreateCard("link")}}>Create link card</button>
        <CreateNew type={newType} invisible={!newVisible} createFunction={AddCard} closeFunction={CloseCreateMenu}></CreateNew>
    </div>
    <!-- Section with all the lists: -->
    <div class="section main">
        {#each lists as list, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="listParent" class:moving={list.isMoving} bind:this={listElements[i]}>
                <div class="topOfList">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img class="icon" src="/icons/moveicon.png" alt="move" on:click={() => {Move(i)}} on:keypress={() => {Move(i)}}>
                    <h1>{list.title}</h1>
                    <img class="icon" id="deleteButton" src="/icons/settings.png" alt="delete">
                </div>
                
                <div class="list" >
                    {#each list.cards as card, j}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="element" class:movingCard={card.moving} bind:this={list.elements[j]} on:click={() => {MoveCard(i, j); }}>
                            {#if card.type == "text"}
                                <p>{card.value}</p>
                            {:else if card.type == "link"}
                                <a href="{card.path}">{card.value}</a>
                            {:else if card.type == "image"}
                                <img src="{card.value}" alt="crazy pic">
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        
        <div bind:this={deleteCardElement} id="cardDelete" class:fakeHover={deleteCardHover} class:cardIsMoving={cardIsMoving || (currentList != -1 && lists[currentList].isMoving)} on:mouseover={(suii) => {deleteCardHover = true}} on:mouseout={() => {deleteCardHover = false}}> </div>
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
    :global(body){
        overflow: hidden;
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
    #cardDelete {
        transition: 0.25s;
        background-image: url(icons/trash.png);
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        width: 150px;
        aspect-ratio: 1;
        border-radius: 100%;
        pointer-events: visible;
        left: 25px;
        bottom: -175px;
    }
    #cardDelete.cardIsMoving {
        bottom: 25px;
    }
    #cardDelete.cardIsMoving.fakeHover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    .element {
        background-color: var(--bg-accent-2);
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
        width: fit-content;
        transform: translate(-50%, -50%);
        z-index: 1;
        max-width: 150px;
    }
    .movingCard a {
        pointer-events: none;
    }
    .moving {
        position: absolute;
        height: 60vh;
        z-index: 1;
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