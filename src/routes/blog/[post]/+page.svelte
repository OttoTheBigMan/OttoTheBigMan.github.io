<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <article class="post">
        <svelte:component this={data.markdown} />
    </article>
</main>

<style>
    .post {
        margin: 5vh 0;
        background-color: rgb(56, 56, 56);
        width: 40%;
        min-height: 90vh;
        max-height: fit-content;
        border-radius: 25px;
        font-family: ubuntu;
        color: white;
        display: flex;
        flex-direction: column;
        padding: 25px;
        box-sizing: border-box;

        box-shadow: 6px 6px rgb(40, 40, 40);
    }
    
    main {
        width: 100vw;
        min-height: 100vh;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(29, 29, 29);
    }
    :global(body){
        overflow-y: scroll;
    }
</style>