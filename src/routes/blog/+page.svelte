<script>
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
</script>
<main>
    <h1>Cray Cray Blog</h1>
    <div class="list">
        {#each fileNames as name}
            <div class="post-div"> 

                <h3>{name}</h3>
                <a class="btn" href="/blog/{name}">Open</a>

            </div>

        {/each}
    </div>
</main>
<style>
    main{
        font-family: ubuntu;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        color: white;
        background-color: black;
        height: 100vh;
    }
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #1a1a1a;
        width: 40%;
        min-height: 80%;
        max-height: fit-content;
        border-radius: 15px;
    }
    .post-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: rgb(36, 36, 36);
        width: 80%;
        height: 50px;
        margin-top: 10px;
        border-radius: 5px;
    }
    .post-div h3 {
        text-indent: 5px;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 40px;
        color: black;
        background-color: #F7773B;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 5px;
    }
    .btn:hover {
        background-color: #ED5A39;
    }
</style>