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
{#each fileNames as name}
    <a href="/blog/{name}">{name}</a>
{/each}
</main>
<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>