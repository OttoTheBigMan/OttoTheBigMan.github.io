<script>
    import "@fontsource/ubuntu"
</script>

<main>
    <h1>Otto's Crazy Website</h1>

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
        justify-content: center;
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
    }
</style>