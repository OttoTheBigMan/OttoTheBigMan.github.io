<script>
    import {fade} from "svelte/transition"
    let gameOver = false;
    let winner = 0;
    let turn = 0;
    let images = ["", "https://cdn-icons-png.flaticon.com/512/57/57165.png", "https://cdn-icons-png.flaticon.com/512/71/71397.png"]
    let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    function StartGame(){
        board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }
    function DoAction(row, col){
        if(board[row][col] != 0){
            return;
        }

        board[row][col] = turn % 2 + 1;
        turn++;
        board = board;
        CheckState()
    }
    function CheckState(){
        //Horizontal and vertical check:
        board.forEach(row => {
            //Check for horizontal win:
            if(row[0] == row[1] && row[0] == row[2] && row[0] != 0){
                Endgame(row[0])
            }
        });
        //Check for vertical win:
        for (let i = 0; i < 3; i++) {
            if(board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != 0){
                Endgame(board[0][i])
            }
        }
        //Check diagonal win:
        if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0){
            Endgame(board[0][0]);
        }
        else if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != 0){
            Endgame(board[0][2]);
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
        gameOver = true;
        winner = balls;
        console.log("winner: " + balls);
    }
</script>
<body class="screen"> 
{#if !gameOver}
    <div class="board">
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
    <div class="turnIndicator">
        <img alt="turn" src={images[turn % 2 + 1]}>
        <p> turn</p>
    </div>
{/if}
{#if gameOver}
    <div class="endScreen">
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
    .screen {
        height: 100vh;

        background-color: #ddd;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    .board {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        gap: 10px;
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
    .endScreen img {
        width: 250px;
        height: 250px;
    }
    .endScreen p{
        font-family: roboto;
        font-size: x-large;
        text-align: center;
        font-weight: 600;
    }
</style>