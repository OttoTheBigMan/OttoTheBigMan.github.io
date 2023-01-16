<script>
    import { text } from "svelte/internal";
    const ARRAYSAVE = "SAVEARRAYMEBOI"
    let todoListArr = [];

    let inputText = "";

    function NewCheckBox(){
        if(inputText.length == 0) {
            alert("Can't create empty card")
            return
        }
        // else if(inputText.length > 16){
        //     alert("PLEASE no more than 16 characters")
        //     return;
        // }
        todoListArr.push({
            text: inputText,
            value: false
        })
        todoListArr = todoListArr;
        inputText = ""
    }
    function Save(){
        const VAL = "VALUE"
        const TXT = "TEXT"
        const LEN = "LENGTH"
        for (let i = 0; i < todoListArr.length; i++) {
            const obj = todoListArr[i];
            localStorage.setItem(ARRAYSAVE + VAL + i.toString(), obj.value)
            localStorage.setItem(ARRAYSAVE + TXT + i.toString(), obj.text)
        }
        localStorage.setItem(ARRAYSAVE + LEN, todoListArr.length)
    }

    function Load(){
        const VAL = "VALUE"
        const TXT = "TEXT"
        const LEN = "LENGTH"
        todoListArr = []
        const arrayLength = parseInt(localStorage.getItem(ARRAYSAVE + LEN))
        for (let i = 0; i < arrayLength; i++) {
            todoListArr[i] = {
                text: localStorage.getItem(ARRAYSAVE + TXT + i.toString()),
                value: localStorage.getItem(ARRAYSAVE + VAL + i.toString()) == "true" 
            }
        }
        todoListArr = todoListArr;
    }
    function DeleteCard(object){
        todoListArr.splice(todoListArr.indexOf(object), 1)
        todoListArr = todoListArr;
    }
</script>

<body class="todoBody">
    <h1>TODO LIST</h1>
    <div class="inputDiv">
        <input bind:value={inputText} placeholder="What to do...">
        <div>
            <button on:click={NewCheckBox}>Add new checkbox</button>
            <button on:click={Save}>Save</button>
            <button on:click={Load}>Load</button>
        </div>
    </div>
    
    
    <div class="todoList">
        {#each todoListArr as obj, i}
        <div class="todoCard">
            <input id="val" type="checkbox" bind:checked={obj.value}>
            <p>{obj.text}</p>
            <button on:click={DeleteCard(obj)}><img alt="hehehehaw" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"></button>
        </div>
        {/each}
    </div>

    <!-- <p> {todoListArr[0].value} </p> -->
    
</body>

<style>
    :global(body){
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
    }
    .inputDiv {
        background: rgba(73, 47, 75, 70%);
        width: 500px;
        height: 10vh;
        margin: 10px auto;
        border-radius: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        /* align-items: center; */
        align-content: space-around;
    }
    .inputDiv input {
        border-radius: 5px;
        margin: 0 50px;
        border: solid black 1px;
    }
    .inputDiv div {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 5px;

        /* background-color: black; */
        
    }
    .inputDiv div button {
        background-color: #bbb;
        box-shadow: 3px 3px black;
        margin: 3px;
        border-radius: 5px;
        font-weight: 600;
    }
    .inputDiv div button:active {
        box-shadow: none;
        transform: translate(3px, 3px);
    }
    .todoList {
        padding: 10px;
        width: 500px;
        background: rgba(73, 47, 75, 70%);
        margin: 10px auto;
        border-radius: 20px;
    }
    .todoList:empty {
        background-color: transparent;
    }
    .todoCard {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 75%;
        height: 75px;
        background-color: rgba(129, 182, 230, 30%);
        margin: 10px auto;
        border-radius: 10px;
        text-align: left;
    }
    .todoCard button {
        border-radius: 10px;
        align-self: center;
        height: 60px;
        width: 60px;
        margin-right: 7px;
        display: flex;
        justify-content: center;
        border: 2px solid #000;
        align-items: center;
    }
    .todoCard button:active{
        background-color: #bbb;
    }
    .todoCard button img {
        width: 50px;
        height: 50px;
    }
    .todoCard input {
        width: 60px;
        height: 60px;
        margin-top: 7px;
        margin-left: 7px;
        border-radius: 10px;
        appearance: none;
        border: 2px solid #000;
        background-color: white;
        display: flex;
    }
    .todoCard input:checked {
        background: url(https://static.thenounproject.com/png/6156-200.png), skyblue;
        background-size: cover;
    }
    .todoCard p {
        font-family: Tahoma;
        text-align: center;
        align-self: center;
        max-width: 60%;
        word-wrap: break-all;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 80%;
    }
    .todoCard p::-webkit-scrollbar {
        display: none;
    }
    .todoBody {
        background-image: url(https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        text-align: center;
        font-family: sans-serif;
    }
</style>