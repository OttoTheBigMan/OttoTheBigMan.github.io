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

//Bakgrund grejer

let complexTransitionTime = 3000    // <-- for complex animation
    let transitionTime = 1000           // <-- 100 ms - time our animation will last
    let previousTime, start = 0;        // <-- stores data on animation
    let angle = 135;                    // <-- angle of gradient
    let animationDirection = 'forwards' // <-- stores the animation direction
    let complexAnDirection = 'forwards' // <-- for continuous animation
    let element = 'gradient-button-transition'; // <-- id of our button
    let intervalFrame;                          // <-- stores the interval frame
    let complexIntervalFrame;                   // <-- for 'always on' gradient transition
    let currentPct = 0;                         // <-- current percentage through the animation
    let complexCurrentPct = 0;                  // <-- current pct for complex animation
    let elapsed = 0;                            // <-- number of frames which have ellapsed 
    let complexElapsed = 0;                     // <-- complex elapsed time

const getColor = function(pct, colorSet) {
  for (let i = 1; i < colorSet.length - 1; i++) {
    if (pct < colorSet[i].pct) {
        break;
      }
    }
  let lower = colorSet[i - 1];
  let upper = colorSet[i];
  let range = upper.pct - lower.pct;
  let rangePct = (pct - lower.pct) / range;
  let pctLower = 1 - rangePct;
  let pctUpper = rangePct;
  let color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  }
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}
let time
const complexGradientAnimation = function() {
        if(complexIntervalFrame === undefined) {
            complexIntervalFrame = setInterval(() => {
                let time = complexTransitionTime / 1000;
                let numberOfFrames = time * 60; // 60 frames per second -> 1 second = 60 frames
                
                if(complexCurrentPct === 100) {
                    complexAnDirection = 'backwards';
                }
                else if(complexCurrentPct === 0) {
                    complexAnDirection = 'forwards';
                }
                // If the animation is going forward
                if(complexAnDirection == 'forwards') {
                    // Add 1 to elapsed
                    complexElapsed += 1;
                    // The elapsed frames out of max frames
                    complexCurrentPct = Math.min(complexElapsed / numberOfFrames, 1) * 100;
                }
                else if(complexAnDirection === 'backwards') {
                    // Otherwise we're going back - subtract 1 from ellapsed
                    complexElapsed -= 1;
                    // The elapsed frames out of max frames
                    complexCurrentPct = Math.max(complexElapsed / numberOfFrames, 0) * 100;
                }

                // Calculate current color in this time for each gradient color
                let colorOne = getColor(complexCurrentPct, complexGradientOne);
                let colorTwo = getColor(complexCurrentPct, complexGradientTwo);

                // Generate CSS string
                let generateGradient = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;

                // Add it to our background.
                body.style.backgroundImage = generateGradient;

            }, 16.667); // 60 frames per second
        }
    };


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
@keyframes bgFade{
  0% {background: linear-gradient(135deg, rgb(255,0,0), rgb(128, 0, 0));}
  9% {background: linear-gradient(135deg, rgb(255,128,0), rgb(128, 64, 0));}
  18% {background: linear-gradient(135deg, rgb(255,255,0), rgb(128, 128, 0));}
  27% {background: linear-gradient(135deg, rgb(128,255,0), rgb(64, 128, 0));}
  36% {background: linear-gradient(135deg, rgb(0,255,0), rgb(0, 255, 0));}
  45% {background: linear-gradient(135deg, rgb(0,255,128), rgb(0, 255, 128));}
  54% {background: linear-gradient(135deg, rgb(0,255,255), rgb(0, 128, 128));}
  63% {background: linear-gradient(135deg, rgb(0,128,255), rgb(0, 64, 128));}
  72% {background: linear-gradient(135deg, rgb(0,0,255), rgb(0, 0, 128));}
  81% {background: linear-gradient(135deg, rgb(128,0,255), rgb(64, 0, 128));}
  90% {background: linear-gradient(135deg, rgb(255,0,255), rgb(128, 0, 128));}
  100% {background: linear-gradient(135deg, rgb(255,0,128), rgb(128, 0, 64));}
}

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
      
      /* animation-name: bgFade;
      animation-duration: 5s;
      animation-timing-function: ease-in-out;
      animation-play-state: running;
      animation-iteration-count: infinite;       */

      background: linear-gradient(135deg, #ff7147,  #e0417f);
      transition: all 0.1s ease-out;

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