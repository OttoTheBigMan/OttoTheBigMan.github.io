<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  
  <main>
    <h2>{"Showing results for: " + data.params.category}</h2>
    <hr />
    <!-- TODO: Style the results -->
    <div>
      {#each data.response as item}
        <article><p>{JSON.stringify(item)}</p></article>
      {/each}
    </div>
  </main>   
<style>
    main {
        box-sizing: border-box;
        padding: 50px;
        position: absolute;
        left: 0;
        width: 100vw;
        height: 100%;
        overflow-y: scroll !important;
    }
</style>