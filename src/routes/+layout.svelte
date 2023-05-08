<script>
    import "@fontsource/ubuntu"
    
    const links = [{url: "/", text: "Home"}, {url: "/search", text: "Search"},{url: "/telltale", text: "Telltale"}, {url: "/memory", text: "Memory"}, {url: "/eliza", text: "Eliza"}, {url: "/todo", text: "Todo list"}, {url: "/tictactoe", text: "Tic Tac Toe"}, {url: "not-trello", text: "Not Trello"}]
    let linkList = []
    let barOpen = false;
    function ToggleBar(){
        barOpen = !barOpen;
        linkList = barOpen ? JSON.parse(JSON.stringify(links)) : []
    }
</script>

<div class="{barOpen ? "open" : "closed"} bar">
    {#each linkList as link}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a class="barLink" href="{link.url}">
            {link.text}
        </a>
        
    {/each}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img id="toggleButton" class:toggleRotate={barOpen} alt="close" src="{barOpen ? "/icons/close.png" : "/icons/leftarrow.png"}" on:click={ToggleBar}>
</div>

<main>
    <slot></slot>
</main>

<style>
    :global(body){
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    :root {
        --barColor: #5f6a7b;
    }
    .bar {
        z-index: 69420;

        transition: 0.5s;
        border-radius: 10px;
        border: 2px solid black;
        box-shadow: 2px 2px black;
        background-color: var(--barColor);

        position: absolute;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        top: 1vw;
        right: 1vw;
    }
    .closed {
        height: 50px;
        width: 50px;
        
    }
    .open {
        width: 98%;
        height: 50px;
    }
    #toggleButton {
        aspect-ratio: 1;
        height: 40px;
        position: absolute;
        right: 5px;

        transition: 0.5s;
    }
    .toggleRotate {
        transform: rotate(360deg);
    }
    .barLink {
        font-family: ubuntu;
        font-size: 20px;
        height: 90%;
        width: 7.5%;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        color: black;

        overflow: hidden;

        text-decoration: none;
    }
    .barLink:hover {
        background-color: rgba(256,256,256,25%);
    }
</style>