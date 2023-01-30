<script>
    import {fade} from "svelte/transition"
    let element;
    let canPress = true;
    let gameOver = false;
    let winner = 0;
    let turn = 0;
    let onePlayer = true;
    let images = ["", "https://cdn-icons-png.flaticon.com/512/57/57165.png", "https://cdn-icons-png.flaticon.com/512/71/71397.png"]
    const startBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let board = CloneArray(startBoard)
    function CloneArray(arr){
        return JSON.parse(JSON.stringify(arr))
    }
    function StartGame(){
        turn = 0;
        canPress = true;
        gameOver = false;
        board = CloneArray(startBoard)
    }
    function GetZeros(arr){
        let zeros = 0
        arr.forEach(row => {
            zeros += row.filter(v => v === 0).length;
        })
        return zeros
    }
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function PlaceRandomTile(fullBoard){
        let count = GetZeros(fullBoard)
        let place = randomInt(0, count - 1)
        let bruh = 0;
        for (let i = 0; i < fullBoard.length; i++) {
            const element = fullBoard[i];
            for (let j = 0; j < element.length; j++) {
                const hehehehaw = element[j];
                if(hehehehaw == 0 && bruh == place){
                    fullBoard[i][j] = 2;
                    return fullBoard;
                }
                else if(hehehehaw == 0){
                    bruh++
                }
            }
        }
        return fullBoard;
    }
    async function JaquizeTurn(){
        await new Promise(resolve => setTimeout(resolve, randomInt(250, 750)));
        board = PlaceRandomTile(board)
        board = board;
        turn++;
        CheckState()
    }
    function DoAction(row, col){
        if(onePlayer && turn % 2 == 1){
            return;
        }
        if(board[row][col] != 0 || !canPress){
            return;
        }

        board[row][col] = turn % 2 + 1;
        turn++;
        board = board;

        CheckState()
        if(canPress && onePlayer){
            JaquizeTurn()
        }
    }
    function CheckState(){
        //Horizontal and vertical check:
        board.forEach(row => {
            //Check for horizontal win:
            if(row[0] == row[1] && row[0] == row[2] && row[0] != 0){
                Endgame(row[0])
                return;
            }
        });
        //Check for vertical win:
        for (let i = 0; i < 3; i++) {
            if(board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != 0){
                Endgame(board[0][i])
                return;

            }
        }
        //Check diagonal win:
        if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0){
            Endgame(board[0][0]);
            return;

        }
        else if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != 0){
            Endgame(board[0][2]);
            return;

        }

        //Check for draw:
        let draw = true;
        board.forEach(row => {
            row.forEach(val => {
                if(val == 0){
                    draw = false;
                }
            });
        });
        if(draw){
            Endgame(0);
        }
    }
    function Endgame(balls){
        //winner = 0 betyder draw
        element.style.setProperty("--gridSize", "150px");
        element.style.setProperty("--gapSize", "15px");
        winner = balls;
        canPress = false;
        EndDelay()
    }
    async function EndDelay() {
        await new Promise(resolve => setTimeout(resolve, 500));
        gameOver = true;
    }
    function EnableJaquize(enabled){
        onePlayer = enabled;
    }
</script>
<body class="screen"> 
{#if !gameOver}
<div out:fade="{{duration: 500}}" in:fade="{{duration: 500, delay: 750}}" class="gaming">
    <div class="turnIndicator">
        <img alt="turn" src={images[turn % 2 + 1]}>
        <p> Turn</p>
    </div>
    {#if JSON.stringify(board) == JSON.stringify(startBoard)}
    <div class="playerCount" out:fade="{{duration: 500}}">
        <img style="--rad: {onePlayer?2:0}px" class="playerButton" src="https://cdn-icons-png.flaticon.com/512/38/38490.png" alt="1player" on:click={() => {EnableJaquize(true)}} on:keydown={() => {EnableJaquize(true)}}>
        <img style="--rad: {!onePlayer?2:0}px" class="playerButton" src="https://cdn-icons-png.flaticon.com/512/39/39739.png" alt="2player" on:click={() => {EnableJaquize(false)}} on:keydown={() => {EnableJaquize(false)}}>
    </div>
    {/if}
    <div class="board" bind:this={element}>
        {#each board as row, i}
            {#each row as piece, j}
                <div class="piece" on:click={() => {DoAction(i, j)}} on:keydown={() => {DoAction(i, j)}}>
                    {#if piece != 0}
                        <img alt="piece" src={images[piece]}>
                    {/if}
                </div>
            {/each}
        {/each}
    </div>
</div>
{/if}
{#if gameOver}
    <div class="endScreen" out:fade="{{duration: 500}}" in:fade="{{duration: 500, delay: 750}}" on:click={() => {StartGame()}} on:keydown={() => {StartGame()}}>
        {#if winner != 0}
            <img id="winnerIcon" alt="icon" src={images[winner]}>
            <p>WINNER!</p>
        {/if}
        {#if winner == 0}
            <img alt = "icon1" src={images[1]}>
            <img alt = "icon2" src={images[2]}>
            <p>DRAW!</p>
        {/if}
    </div>
{/if}
</body>
<style>
    :global(body){
        margin: 0;
        padding: 0;
    }
    p {
        font-family: roboto;

    }
    .screen {
        height: 100vh;
        width: 100vw;
        background-color: #ddd;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .gaming {
        position: relative;
        
        height: 100%;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .playerCount {
        position: fixed;
        bottom: 25px;

        width: 150px;
        display: flex;
        justify-content: space-between;
    }
    .playerCount img {
        width: 64px;
        height: 64px;
    }
    .turnIndicator {
        position: absolute;
        top: 15px;

        width: fit-content;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .turnIndicator img {
        width: 2em;
        height: 2em;
    }
    .turnIndicator p {
        font-weight: 600;
    }
    .board {
        --gridSize: 100px;
        --gapSize: 10px;

        transition: 1.5s ease-out;
        display: grid;
        grid-template-columns: repeat(3, var(--gridSize));
        grid-template-rows: repeat(3, var(--gridSize));
        gap: var(--gapSize);
        background-color: #a1a1a1;
        margin: 0 auto;
        width: fit-content;
        height: fit-content;
    }
    .piece {
        background-color: #ddd;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .piece img{
        width: 80%;
        height: 80%;
    }
    .endScreen {
        position: fixed;
    }
    .endScreen img {
        width: 250px;
        height: 250px;
    }
    .endScreen p{
        font-size: x-large;
        text-align: center;
        font-weight: 600;
    }
    .playerButton {
        border-width: var(--rad);
        border-style: solid;
        border-radius: 15px;
    }
</style>