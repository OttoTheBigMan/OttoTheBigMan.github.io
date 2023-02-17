<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <div class="post">
        <svelte:component this={data.markdown} />
    </div>
</main>

<style>
    .post {
        margin: 5vh 0;
        background-color: rgb(102, 102, 102);
        text-align: center;
        width: 40%;
        min-height: 90vh;
        max-height: fit-content;
        border-radius: 25px;
        font-family: ubuntu;
    }
    main {
        width: 100vw;
        min-height: 100vh;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
    }
    :global(body){
        overflow-y: scroll;
    }
</style>