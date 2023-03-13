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
      {#if data.params.category == "users"}
        <article class="user">
          <img src="{item.avatar}" alt="pic">
          <div class="address">
            <h2>{item.first_name} {item.last_name}</h2>
            <p>{item.address.street_address}, {item.address.zip_code}</p>
          </div>
          <div class="end">
            <h2>Contact:</h2>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone_number}</p>
          </div>
        </article>
        {:else}
        <article><p>{JSON.stringify(item)}</p></article>

      {/if}
      
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
        overflow-y: scroll;
    }
    .user {
      display: flex;
      align-items: center;
    }
    .user img {
      aspect-ratio: 1;
      height: 100px;
    }
    h2 {
      vertical-align: middle;
      margin-bottom: 0;
    }
    .address {
      display: flex;
      flex-direction: column;
    }
    .end {
      justify-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
    }
</style>