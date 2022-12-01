<script>
    let cards = [];
    let imgs = [
      "https://www.xfire.com/wp-content/uploads/2022/08/cropped-walter-white-might-be-headed-to-multiversus-8.jpg",
      "https://media.tenor.com/Tt6zaNenfWIAAAAd/tate-andrew-tate.gif",
      "https://i.imgflip.com/59l754.jpg",
      "https://i.kym-cdn.com/photos/images/newsfeed/002/069/848/829.jpg",
      "https://media.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif",
      "https://i.pinimg.com/736x/8d/4a/56/8d4a568bbcff12eb65021ed8b18820c4.jpg",
      "https://media4.giphy.com/media/toYIS95xETUPLmU9WP/200w.gif?cid=6c09b952092bs1rfbs49q74ykuepfbw4yaa2tidait70iecv&rid=200w.gif&ct=g",
      "https://preview.redd.it/ipx4meygqop41.jpg?auto=webp&s=c3d29af3d9e176e6cf9fe44a0b036e3ce733e2cc"
    ];
    let startNums = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    for (let index = 0; index < 16; index++) {
      cards.push({
        id: startNums[index], // TODO: unique ids per card card
        img: imgs[startNums[index]],
        flipped: false,  
        completed: false,
      });
    }
    shuffleArray(cards)
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
    let flipcount = 0;
    function flip(card) {

      if(card.flipped){
        alert("bruv");
        return;
      }

      // flip card over if two cards are not already flipped
      // TODO: and card is already not flipped
      if (!card.flipped && flipcount < 2) {
        // TODO: Probably do what?

        let match = false;
        card.flipped = true;
        flipcount++;
        // flip the cards over after 1.5s from seeing both cards
        if (flipcount == 2) {
          let temp = undefined;
          cards.forEach((card) => {
            if(card.flipped && temp == undefined && !card.completed){
              temp = card;
            }else if(card.flipped && temp != undefined && !card.completed){
              if(temp.id == card.id){
                temp.completed = true;
                card.completed = true;
                match = true;
                return;
              }
            }
          });
          if(match){
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
          }
          else{
          setTimeout(() => {
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
          }, 1500);
        }
        }
        cards = cards;
      } else {
        alert("chill");
      }
    }
    let body;
    function DoFrame(time){
        let sec = time / 1000;

        rotation+=5
        if(body != null){
            body.style.transform = `translate(-50%, 0) rotateZ(${rotation}deg)`
        }

        window.requestAnimationFrame(DoFrame)
    }


  </script>
  <body bind:this={body}>
  <h1>Memory game</h1>
  <main>

    
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="https://cdnb.artstation.com/p/assets/images/images/012/680/911/large/kathryn-raccuglia-character-card-back.jpg?1535999441" alt="" />
        </div>
      {/each}
    </div>
  </main>
</body>
  <style>
    h1{
      text-align: center;
    }
    :global(body){
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    body{
      margin: 0;
      

      background-position: 0px 0px, 10px 10px;
    background-size: 20px 20px;
    background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);

      animation: anim 2s 2s forward;

      height: 100vh;
      width: 100vw;
    }
    main {
      display: flex;
      place-content: center;
      place-items: center;
    }
  
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
      background-color: gray;
      border-radius: 15px;
      padding: 15px;
    }
  
    .card {
      background: transparent;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
  
    .card.flipped {
      transform: rotateY(180deg);
    }
  
    .card .back {
      transform: rotateY(0deg);
    }
  
    .card .front {
      transform: rotateY(180deg);
    }
  
    .card img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>