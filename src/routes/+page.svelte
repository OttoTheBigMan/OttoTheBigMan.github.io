<script>
    import {onMount} from "svelte";
    import "@fontsource/ubuntu"

    const links = [
        {path: "/telltale", text: "Telltale"},
        {path: "/memory", text: "Memory"},
        {path: "/eliza", text: "Eliza"},
        {path: "/todo", text: "Todo"},
        {path: "/tictactoe", text: "Tic tac toe"},
        {path: "/blog", text: "Blog"}
    ]

    let skull1;
    let skull2;

    let rotation = 0;
    function DoFrame(time){
        let sec = time / 1000;

        rotation+=5
        if(skull1 != null){
            skull1.style.left = (50 + 40 * Math.sin(sec)).toString() + "%";
            
            skull1.style.transform = `translate3d(-50%, 0, 0) rotateZ(${rotation}deg)`

            skull2.style.left = (50 - 40 * Math.sin(sec)).toString() + "%";
            
            skull2.style.transform = `translate3d(-50%, 0, 0) rotateZ(${-rotation}deg)`
        }
        window.requestAnimationFrame(DoFrame)
    }

    onMount(() => {
        window.requestAnimationFrame(DoFrame)
    })
</script>

<main>
    <h1>Otto's Crazy Website</h1>

    <div class="navigation">
        {#each links as link}
            <div class="link" onclick="location.href='{link.path}'">
                {link.text}
            </div>
        {/each}
    </div>

    <div class="cradle">

    </div>

    <div class="footer">
        <div>
            <h2>Games</h2>
            <a href="https://realbigmonk.itch.io/the-long-adventures-of-jaquize" target="_blank" rel="noreferrer">Jaquize</a>
            <a href="https://realbigmonk.itch.io/birdhalla-remastered" target="_blank" rel="noreferrer">Birdhalla RM</a>
            <a href="https://realbigmonk.itch.io/chad-game" target="_blank" rel="noreferrer">CHAD GAME</a>
        </div>
        <div>
            <h2>More games</h2>
            <a href="https://realbigmonk.itch.io/iwftro">I Wanna File The Restraining Order</a>
            <a href="https://realbigmonk.itch.io/iwbtb">I Wanna Be The Beetle</a>
            <a href="https://realbigmonk.itch.io/i-wanna-run-the-triathlon">I Wanna Run The Triathlon</a>
        </div>
        <div>
            <h2>Other</h2>
            <a href="https://github.com/OttoTheBigMan/OttoTheBigMan.github.io/tree/master" target="_blank" rel="noreferrer">Source code</a>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">Fantastic video</a>
        </div>
    </div>
</main>
<style>
    main {
        width: 100vw;
        height: 100vh;
        background-color: #000d36;
        position: absolute;
        color: white;
        font-family: ubuntu;

        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;

    }
    .navigation {
        position: absolute;
        top: 15%;
        width: 25%;
        height: 50%;
        border-radius: 20px;
        background-color: rgba(64,64,64,20%);
        

        display: grid;

        justify-content: center;
        align-content: center;

        gap: 5%;
        grid-template-columns: repeat(2, 45%);
        grid-template-rows: repeat(3, 20%);
    }
    .navigation div {
        border-radius: 10px;

        color: white;
        font-size: larger;

        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    .navigation div:hover {
        background-color: rgba(0,0,0,50%);
    }
    .footer {
        width: 100vw;
        height: 20vh;
        background-color: black;
        position: absolute;
        bottom: 0;

        box-shadow: 0 0 16px 16px black;

        display: flex;
        justify-content: space-evenly;
    }
    .footer div {
        display: flex;
        flex-direction: column;
    }
    a{
        color: #034ba3;
        text-decoration: none;
    }
    a:hover{
        color: #0a5fc7;
        /* hello*/
    }

    /* Newtons crazy cradle (kanske) */

</style>
