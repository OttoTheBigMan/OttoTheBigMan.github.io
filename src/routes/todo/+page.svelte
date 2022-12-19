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
            <input class="checkBoxClass todoContent" type="checkbox" bind:checked={obj.value}>
            <p class="todoContent">{obj.text}</p>
            <button on:click={DeleteCard(obj)}>Delete</button>
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
    .todoList {
        padding: 10px;
        width: 500px;
        background: rgba(73, 47, 75, 70%);
        margin: 10px auto;
        border-radius: 20px;
    }
    .todoCard {
        width: 300px;
        height: 75px;
        background-color: darkgray;
        margin: 10px auto;
        border-radius: 10px;
        text-align: left;
    }
    .todoBody {
        background-image: url(https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        text-align: center;
        font-family: sans-serif;
    }
    .todoContent {
        display: inline-block;
        vertical-align: middle;
    }
    .checkBoxClass {
        width: 60px;
        height: 60px;
        margin-top: 7px;
        margin-left: 7px;
    }
    button {
        border-radius: 5px;
    }
</style>