<script>
    import ubuntu from "@fontsource/ubuntu"
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
        listIndex: index,
        id: startNums[index], // TODO: unique ids per card card
        img: imgs[startNums[index]],
        flipped: false,  
        completed: false,
        flippedBefore: false
      });
    }
    shuffleArray(cards)
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    let flipcount = 0;
    function flip(card) {

      if(card.flipped){
        alert("bruh");
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
          //Me when flip two cards
          let temp = undefined;
          let temp2 = undefined;
          cards.forEach((card) => {
            if(card.flipped && temp == undefined && !card.completed){
              temp = card;
            
            }else if(card.flipped && temp != undefined && !card.completed){
              
              if(temp2 == undefined && card.flipped && !card.completed && card.listIndex != temp.listIndex){
                temp2 = card;
              }

              if(temp2 != undefined && temp.id == temp2.id){
                temp.completed = true;
                temp2.completed = true;
                match = true;
                return;
              }
            }
          });
          pickCards(temp, temp2);
          temp2.flippedBefore = true;
          temp.flippedBefore = true;
          if(match){
            // flip over cards that have not been marked as "completed"
            let done = true;
            cards.forEach((card) => {
              card.flipped = card.completed;
              if(!card.completed){
                done = false;
              }
            });
            if(done){
              finishGame()
            }
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
    

//SCORE SYSTEM STUFF BABY!!!!!

let score = 0;
let tries = 0;
let highScore = localStorage.getItem("highScore")
let bestTries = localStorage.getItem("bestTries")
let avgScoreArr = []
let avgTriesArr = []
let avgScore = 0;
let avgTries = 0;

loadAverage()


console.log()

if(highScore == undefined){
  highScore = 0;
}
if(bestTries == undefined){
  bestTries = 69420;
}

function loadAverage(){
  avgScoreArr = []
  avgTriesArr = []
  for (let i = 0; i < 5; i++) {
    let item = localStorage.getItem(i + "scoreArr")
    if(item != undefined){
      avgScoreArr.push(item)
    }
    
  }
  for (let i = 0; i < 5; i++) {
    let item = localStorage.getItem(i + "triesArr")
    if(item != undefined){
      avgTriesArr.push(item)
    }
    
  }
  let sum = 0;
  //Set the average tries
  
    
  for (let i = 0; i < avgScoreArr.length; i++) {
    const element = avgScoreArr[i];
    sum += parseInt(element);
  }
  avgScore = sum / avgScoreArr.length
  sum = 0;
  
  for (let i = 0; i < avgTriesArr.length; i++) {
    const element = avgTriesArr[i];
    sum += parseInt(element);
  }
  avgTries = sum / avgTriesArr.length
  // console.log(avgTriesArr, avgScoreArr)
}

function finishGame(){
  // console.log("FInsh da gam")
  if(score > highScore){
    localStorage.setItem("highScore", score);
    highScore = score;
  }
  if(tries < bestTries){
    localStorage.setItem("bestTries", tries);
    bestTries = tries;
  }
  //Save average
  avgScoreArr.push(score);
  avgTriesArr.push(tries);
  if(avgTriesArr.length > 5){
    avgTriesArr.shift();
  }
  if(avgScoreArr.length > 5){
    avgScoreArr.shift();
  }

  //ACTUALLY save it hehehehaw
  for (let i = 0; i < avgScoreArr.length; i++) {
    const element = avgScoreArr[i];
    localStorage.setItem(i + "scoreArr", element);
  }
  for (let i = 0; i < avgTriesArr.length; i++) {
    const element = avgTriesArr[i];
    localStorage.setItem(i + "triesArr", element);
  }
  loadAverage();
}
function pickCards(card1, card2){
  // console.log(card1.listIndex, card2.listIndex)
  tries++;
  
  if(card1.img == card2.img){
    //If the cards match
    score += 15;
    // card1.img = "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
    // card2.img = "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
  }
  else{
    score -= 5;
    return;
  }
  //If both the cards are new
  if(!card1.flippedBefore && !card2.flippedBefore){
    score += 10;
  }
  //If one of the cards is new
  else if(!card1.flippedBefore || !card2.flippedBefore){
    score += 5;
  }
  
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
    </div >
    <div class="score">
      <h2>This round:</h2>
      <p>Tries: {tries}</p>
      <p>Score: {score}</p>
      <h2>Best:</h2>
      <p>Tries: {bestTries}</p>
      <p>Score: {highScore}</p>
      <h2>Last 5 rounds (average):</h2>
      {#if avgScoreArr.length >= 5 && avgTriesArr.length >= 5}
        <p>Tries: {avgTries}</p>
        <p>Score: {avgScore}</p>
      {/if}
      <!-- Basically else: -->
      {#if avgScoreArr.length < 5 || avgTriesArr.length < 5}
      <h1>N/A</h1>
      {/if}
    </div>
    <div class="restartDiv">
      <button onClick="window.location.reload();">
        RESTART
      </button>
    </div>
  </main>
</body>
  <style>



    h1{
      font-family: ubuntu;
      text-align: center;
    }
    :global(body){
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    body{
      background-color: rgb(23, 23, 23);
      height: 100vh;
      width: 100vw;
      color: white;
    }
    main {
      display: flex;
      place-content: center;
      place-items: center;
    }
    h1{
      font-family: sans-serif;
      font-weight: 700;
    }
    .score{
      position:absolute;
      right: 30px;
      background-color: rgba(55, 55, 55, 0.6);
      height: 60vh;
      aspect-ratio: 1 / 1.5;
      border-radius: 15px;
    }
    .score p{
      font-family: sans-serif;
      font-weight: 500;
      text-indent: .5rem;
    }
    .score h2{
      text-align: center;
      font-family: sans-serif;
      font-weight: 600;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
      background-color: rgba(55, 55, 55, 0.6);
      
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
    .card .back:hover{
      transform: translate3d(-5px, -5px, -5px);
      box-shadow: rgba(0,0,0,40%) 5px 5px;
    }
    .restartDiv {
      background-color: #AC9072;
      position: absolute;
      bottom: 50px;
      width: 200px;
      height: 70px;

      border: solid #8E6C49 4px;
      border-radius: 15px;
      /* border-width: 10px;
      border-color: #8E6C49; */
      box-shadow: #764C24 5px 5px;
    }
    .restartDiv button {
      border-radius: 15px;
      width: 100%;
      height: 100%;

      background-color: rgba(0,0,0,0);
      border: none;

      font-size: large;
      font-weight: 700;
    }
    .restartDiv:active {
      transform: translate3d(5px, 5px, 5px);
      box-shadow: none;
    }
  </style>