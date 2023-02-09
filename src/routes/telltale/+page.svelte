<script>
    import { fade, fly } from "svelte/transition";
    import {onMount} from "svelte";
    
    const storyArray = [
        {
            isEnd: false,
            id: 0,
            text: "You have a serious heart disease and are in need of a new heart. There is a loophole that allows you to skip past the waiting list. Do you wait in the list, potentially killing yourself, or do you exploit the loophole to ensure your survival?",
            opt1route: 1,
            opt2route: 2,
            opt1text: "You skip the line.",
            opt2text: "You don't skip the line."
        },
        {
            isEnd: false,
            id: 1,
            text: "You’ve gotten your new heart but there is a catch. You don’t have health insurance and the medical bill is too large. Your family is now in immense debt. But there is a way: You used to work as a chemistry teacher and you know that one of your students, Jessie, has some connections in the criminal world. Being a former chemistry teacher you have some knowledge that allows you to cook the best meth in town.",
            opt1route: 3,
            opt2route: 5,
            opt1text: "You cook meth",
            opt2text: "No meth?"
        },
        {
            isEnd: false,
            id: 2,
            text: "Your condition worsens but you manage to survive. One day you are lying in bed when your phone rings. You pick up the phone and a voice starts talking on the other end. The person on the other end is the person you could have skipped ahead of. They know you could have used a loophole to get ahead of them and if you had, they would have died. Therefore they want to thank you. His name is Paul Goodman and he asks you if you want to work for him. He asks you if you want to work for him. However, there is a catch: You don’t have a degree but Paul says he can supply you with a fake degree. The money could help you get a new heart.",
            opt1route: 11,
            opt2route: 12,
            opt1text: "Say yes to Paul's fake degree.",
            opt2text: "Live the legal life."
        },
        {
            isEnd: false,
            id: 3,
            text: "You contact your old student and, at first, he is a bit suspicious. After convincing him that you are not working with the police he agrees to meet you later that day. Jessie greets you in his cabin's basement and you talk about cooking meth. After selling a decent bit of meth and paying off your debt you start to think about quitting. ",
            opt1route: 4,
            opt2route: 6,
            opt1text: "Quit the meth career.",
            opt2text: "Go all in on the meth."
        },
        {
            isEnd: true,
            id: 4,
            text: "You don’t feel very good about all the meth you sold but the debt is paid off and you seem to have gotten away from the police. However, Jessie thinks you’re going to snitch. He grabs his gun and shoots you in your big ass forehead. You die.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 5,
            text: "You decide that cooking meth is a bad idea. However, this does not change the fact that you are in immense debt. You consider starting a Gofundme page but you have to tell some lies. This feels a bit wrong but it might be the only way to pay off the debt.",
            opt1route: 9,
            opt2route: 10,
            opt1text: "You start the gofundme page with some cap",
            opt2text: "You decide that starting the page is a bad idea"
        },
        {   //Full on meth career, basically välj fight or flight mot hank
            isEnd: false,
            id: 6,
            text: "Business is booming and your meth is the best in town. After a while, however, your brother in law Hank Vader is hunting you down. After you respond violently to him entering Jessie's basement, he has no choice but violence.",
            opt1route: 7,
            opt2route: 8,
            opt1text: "You try to kill Hank",
            opt2text: "You try to run away from Hank"
        },
        {
            isEnd: false,
            id: 7,
            text: "You kill Hank and your meth business is thriving. You make a lot of money and become the guy known as the Escobar of Meth. You live the rest of your life as a drug lord and die at the age of 85.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 8,
            text: "You start running but Hank throws his DEA badge in your direction. It hits you in the head and you die.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 9,
            text: "When you skipped the waiting line for the heart, a man by the name of Paul Goodman died. People who see your Gofundme page are getting a bit suspicious that you skipped the line. Paul’s friends know that someone skipped ahead of Paul and they have reasons to believe it’s you. They manage to track you down and stab you right in your brand new heart.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 10,
            text: "The only way you could pay off the debt was through selling your house and car. You end up living the rest of your life without a home and in misery.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 11,//you get the fake degree
            text: "During your first case, the opposing lawyer tells you that they know about you faking your degree. He tells you to lose the case on purpose even though your client is innocent and could face harsh punishment. If you don’t lose the case on purpose, the other lawyer will snitch and if you do, your client will face harsh consequences.",
            opt1route: 13,
            opt2route: 14,
            opt1text: "Intentionally lose the case.",
            opt2text: "Stand up for your client."
        },
        {
            isEnd: true,
            id: 12,//You skip the fake degree
            text: "Your debt keeps increasing and you can’t afford to take care of yourself. You die from a heart attack.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 13,
            text: "After a bad start to your lawyer career, things finally start to catch up. You make some good money, you get a new heart and all of that good stuff. But there is a catch. Authorities have become aware of your fake degree. They tell you that a lot of fake degrees have been spotted lately. If you tell them who provided you with yours, they’ll let you go. If you don’t, you go to prison.",
            opt1route: 15,
            opt2route: 16,
            opt1text: "You snitch on Paul.",
            opt2text: "Walter ain't no snitch."
        },
        {
            isEnd: true,
            id: 14,
            text: "You get sent to prison due to your fake degree. They manage to trace back your degree to Paul Goodman and he is also sent to the same prison as you. He is pissed that you got him sent to prison and decides to shank shank you.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 15,
            text: "Paul is not gonna be very happy about this, but at least you’re free to go. You end up getting your old job as a chemistry teacher back and live a happy life afterwards.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 16,
            text: "You end up in prison, and funnily enough, you meet your old client. He is absolutely furious with you and stabs you to death.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        }
    ]
    let skull = null, rotation = 0;
    function DoFrame(time){
        let sec = time / 1000;

        rotation+=5
        if(skull != null){
            skull.style.left = (50 + 40 * Math.sin(sec)).toString() + "%";
            skull.style.top = (20 + 40 * Math.cos(sec)).toString() + "%";
            skull.style.transform = `translate3d(-50%, 0, 0) rotateZ(${rotation}deg)`
        }

        window.requestAnimationFrame(DoFrame)
    }

    onMount(() => {
        window.requestAnimationFrame(DoFrame)
    })

    let obj = storyArray[0]
    let dir = 1;
    function ChangeStory(nextID, direction){
        dir = direction;
        obj = storyArray[nextID];
    }
    const snowflakes = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
</script>



<main>
    <div class="AllSnowFlakes" aria-hidden="true">
    {#each snowflakes as flake}
         <div class="SnowFlake">
            ❆
         </div>
    {/each}
    </div>
    {#key obj}
    <div class="titlediv" in:fly = "{{y: -250, delay: 2000, duration: 2000}}" out:fade = "{{duration: 1500}}">
        <h1 >The Story of Walter Gray</h1>
    </div>
    <div class="everythingContainer">
        
    <div in:fly = "{{y: -250, delay: 1500, duration: 1500}}" out:fly = "{{y: -250, duration: 1500}}" class="textContainer" >
        <p  in:fly = "{{y: 250, delay: 2000, duration: 1500}}" out:fade = "{{duration: 1500}}" >{obj.text}</p>
    </div>
    <div in:fly = "{{x: 250 * dir, delay: 1500, duration: 1500}}" out:fly = "{{x: 250 * dir, duration: 1500}}" class="buttonContainer">
        <button in:fly = "{{x: -500, delay: 1750, duration: 2000}}" out:fly = "{{y: -250 * dir, x:-250 * dir, duration: 1500}}" on:click={ChangeStory(obj.opt1route, -1)}>{obj.opt1text}</button>
        <button in:fly = "{{x: 500, delay: 1750, duration: 2000}}" out:fly = "{{y: 250 * dir, x:-250 * dir, duration: 1500}}" on:click={ChangeStory(obj.opt2route, 1)}>{obj.opt2text}</button>
    </div>
    </div>
    
    
    <div class="groundDiv" in:fly = "{{y: 250, delay: 1500, duration: 2000}}" out:fly = "{{y:250, duration: 1500}}">
        
        <img class="Ground" src="https://cdn.discordapp.com/attachments/893428528626933790/1044182439326666822/PngItem_4769072.png" alt="snow">
        <img class="Snowman" src="https://pngimg.com/uploads/snowman/snowman_PNG99814.png" alt="Snowman">
    </div>
    {#if obj.isEnd}
        <img out:fly = "{{x:1000, duration: 1500}}" bind:this={skull} class="skullImage" src="https://media.tenor.com/90Upv3bed2EAAAAi/skull-balenciaga.gif" alt="He died">
    {/if}
    {/key}
    
    
</main>

<style>

    main {
        margin: 0;
        background-color: #196D94;
        font-family: sans-serif;
        height: 100vh;
        position: absolute;
    }
    .SnowFlake {
        color: white;
    }
    .Ground {
        width: 100vw;
        position: relative;
        top: 0;
        left: 0;
    }
    .Snowman {
        width: 20%;
        height: 80%;
        top: 0;
        right: 0;
        /* display: contents;   */
        position: absolute; 
    }
    .groundDiv {
        width: 100vw;
        margin-bottom: 0;
        height: 50vh;
        top: 0;
        left: 0;
        position: relative;
    }

    .titlediv {
        width: fit-content;
        background-color: #3CACE0;
        border-radius: 15px;
        padding: 0 10px;
        margin: 10px auto;

        box-shadow: 0 0 10px #3CACE0;
    }
    .skullImage {
        /* margin: 10px auto; */
        transform-style: preserve-3d;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .everythingContainer {
        /* background-color: #94550A; */
        height: 50vh;
        width: 80vW;
        margin:  10px auto;
    }
    .textContainer {
        background-color: #3CACE0;
        margin: 15px auto;
        text-align: center;
        font-size: large;
        font-weight: 600;
        width: 60vW;
        height: 25vh;
        border-radius: 20px;
        box-shadow: 0 0 10px #3CACE0;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .textContainer p {
        margin: 15px;
        margin-top: 10px;
    }
    .buttonContainer {
        background-color: #5ECCFF;
        width: 50vw;
        height: 10vh;
        margin: 15px auto;
        border-radius: 5vh;
        text-align: center;
        box-shadow: 0 0 10px #5ECCFF;
    }
    .buttonContainer button {
        background-color: #E0963D;
        /* border-color: #94550A; */
        border-radius: 4vh;
        border-width: 0;
        margin: 1vh 5px;
        width: 18vw;
        height: 8vh;
        font-weight: 600;
        
    }
    .buttonContainer button:hover{
        box-shadow: 5px 5px #94550A;
    }
    h1 {
        text-align: center;
        font-weight: 600;
    }

    @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.SnowFlake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.SnowFlake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.SnowFlake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.SnowFlake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.SnowFlake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.SnowFlake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.SnowFlake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.SnowFlake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.SnowFlake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.SnowFlake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.SnowFlake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
</style>