<script>
  import { enhance } from "$app/forms";
  import { beforeNavigate, invalidate } from "$app/navigation";
  import "@picocss/pico";
  import "elizabot";
  import ElizaBot from "elizabot";
  import ubuntu from "@fontsource/ubuntu"
  beforeNavigate(() => {
    invalidate(); // force csr to "unload" the imported css on this page
    // try commenting this out and navigate using href links and see how the
    // picocss is carried with us to other pages. its an ugly hack.
  });
  let eliza = new ElizaBot();
  let chat = [{ user: "Eliza", text: eliza.getInitial() }];
  async function write(message) {
    // TODO: yeet in the new message
    // random delay for writing
    
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    if(eliza.quit){
        chat.push({user: "Eliza", text: eliza.getFinal()})
        
    }else{
        chat.push({user: "Eliza", text: eliza.transform(message)})
    }
    
    chat = chat;
  }
</script>
<main>
<div class="container">
  <h1>Chat with Eliza</h1>
  <div class="scrollable">
    {#each chat as thing}
    <!-- TODO: loop over the messages and display them -->
    <article>
      <span>
        {thing.user}: {thing.text}
      </span>
    </article>
    <!-- end of scrollable -->
    {/each}
  </div>
  <form
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      chat.push({text: text, user: "You"})
      chat = chat;
      write(text);
      
      form.reset()
    }}>
    <input type="text" name="text" />
  </form>
</div>
</main>
<style>
  :global(body){
    overflow-y: auto;
  }
  .scrollable {
    font-family: ubuntu;

  }
  h1 {
    text-align: center;
    margin-top: 10px;
    font-family: ubuntu;

  }
</style>