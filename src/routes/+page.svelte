<script>
    import {onMount} from "svelte";
    import "@fontsource/ubuntu"
    import Ottohub from "$lib/components/Ottohub.svelte"

    const links = [
        {path: "/telltale", text: "Telltale"},
        {path: "/memory", text: "Memory"},
        {path: "/eliza", text: "Eliza"},
        {path: "/todo", text: "Todo"},
        {path: "/tictactoe", text: "Tic tac toe"},
        {path: "/search", text: "Search"}
    ]

    let skull1;
    let skull2;

    let rotation = 0;

    const allFiles = import.meta.glob("$lib/posts/*.md")
    const fileNames = [];
    for (const path in allFiles){

        const substring = path.substring(
            path.lastIndexOf("/") + 1,
            path.lastIndexOf(".")
        )
        console.log(substring)
        fileNames.push(substring)
    }

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
    

    <div class="navigation">
        <h1>More Websites</h1>
        {#each links as link}
            <a class="btn" href="{link.path}">
                {link.text}
            </a>
        {/each}
    </div>

    <div class="anim"></div>
    <Ottohub></Ottohub>

    <div class="blog">
        <h2>Blog posts</h2>
        {#each fileNames as name}
            <div class="post-div"> 

                <h3>{name}</h3>
                <a class="btn" href="/blog/{name}">Open</a>

            </div>

        {/each}
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
            <a href="https://realbigmonk.itch.io/iwftro" target="_blank" rel="noreferrer">I Wanna File The Restraining Order</a>
            <a href="https://realbigmonk.itch.io/iwbtb" target="_blank" rel="noreferrer">I Wanna Be The Beetle</a>
            <a href="https://realbigmonk.itch.io/i-wanna-run-the-triathlon" target="_blank" rel="noreferrer">I Wanna Run The Triathlon</a>
        </div>
        <div>
            <h2>Other</h2>
            <a href="https://github.com/OttoTheBigMan/OttoTheBigMan.github.io/tree/master" target="_blank" rel="noreferrer">Source code</a>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">Fantastic video</a>
        </div>
    </div>
</main>
<style>

    .anim {
        position: absolute;
        left: -46px;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background: repeating-linear-gradient(
            -55deg,
            black 1px,
            #111111 2px,
            #111111 11px,
            black 12px,
            black 20px
        );
        animation-name: MOVE-BG;
        animation-duration: .6s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    @keyframes MOVE-BG {
	from {
		transform: translateX(0);
	}
	to { 
		transform: translateX(46px);
	}
}
    main {
        width: 100%;
        height: 100%;
        background-color: transparent;
        position: absolute;
        color: white;
        font-family: ubuntu;
        text-align: center;

        display: grid;
        grid-template-columns: 25% 50% 25%;
        grid-template-rows: auto 25%;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 40px;
        color: black;
        background-color: #FFA31A;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 5px;

        user-select: none;
    }
    .btn:hover {
        background-color: #ED5A39;
        color: black;
    }
    .post-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: #1a1a1a;
        width: 80%;
        height: 50px;
        margin-top: 10px;
        border-radius: 5px;
    }
    .post-div h3 {
        text-indent: 5px;
    }
    .navigation {
        background-color: black;
        box-shadow: 0 0 16px 16px black;
        

        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        box-sizing: border-box;
        padding-bottom: 25px;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .blog{
        background-color: black;
        box-shadow: 0 0 16px 16px black;
        grid-column-start: 3;
        grid-row: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;

        padding-bottom: 50px;
    }
    .footer {
        width: auto;
        height: 25vh;
        background-color: black;

        box-shadow: 0 0 16px 16px black;

        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 4;

        display: flex;
        justify-content: space-evenly;
    }
    .footer div {
        display: flex;
        flex-direction: column;
    }
    a{
        color: #EDB739;
        text-decoration: none;
    }
    a:hover{
        color: #E08B41;
        /* hello*/
    }
</style>
