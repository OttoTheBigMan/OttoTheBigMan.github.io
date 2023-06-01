# Coola features:

Det mesta jag har fixat sen senaste blogginlägget är egentligen att få hemsidan att se lite coolare ut när man gör vissa grejer, t.ex save och load. Jag har också gjort att en tom tavla har en vacker bild istället för att bara vara helt tom. Jag har också lagt till ett easter egg som visar Heisenberg när man trycker på Save medans tavlan är tom. Alla listor flyger också in ovanifrån på ett väldigt coolt sätt😎.

# Coola featurs igen 😐:

### Nödvändiga features

✅Göra todo-listor och grejer inuti dem.

✅Flytta grejer mellan listor.

✅Flytta listor

✅Save / Load

✅Skapa nya kort

✅Skapa nya listor

### Mindre kritiska features

✅Kunna skicka in bilder i listorna

✅Kunna ha länkar i listorna

✅Byta ut bilder med icke-fungerande URLs mot en annan bild

### Features jag vill göra i mån om tid

❌Flera tavlor.

❌Redigera kort / listor

❌Flera color-themes.

✅Få tom tavla att se bättre ut

✅Fixa en load animation som ser cool ut

✅Fixa en save animation så att man faktiskt ser när man savear

### Features jag gör om jag varit on the grind

❌3d animations😎

❌Fixa nån grej som tar in en image file och laddar upp den till imgur och kopierar URL till denna hemsida.

# Annan info:

Dokumenterat den 1 / 6 - 2023

# Lite mer roliga grejer 🤓

Här är koden som får den tomma tavlan att se galet cool ut:
```svelte
{#if lists.length == 0}
    <div id="empty-board">
        <img src="/icons/empty.png" alt="yup :)">
        <h2>There is nothing...</h2>
    </div>
{/if}
```

Här är koden som visar Heisenberg:
```svelte
<script>
    // Heisenberg.svelte
    export let invis = true;
</script>

<div id="flashbang" class:invis={invis}>

</div>
<div id ="heisenberg" class:invis={invis}>

</div>

<style>
    .invis {
        display: none;
    }
    #heisenberg{
        position: fixed;
        z-index: 32766;
        background-image: url(https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    #flashbang {
        position: fixed;
        z-index: 32767;
        background-color: white;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        animation: flashbang 12.5s 1 forwards;
    }
    @keyframes flashbang {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
```
```js
// +page.svelte
let heisenberg = false;
let heisenbergSound = null;
function ShowHeisenberg() {
    heisenberg = true;
    heisenbergSound.play();
    setTimeout(() => {
        heisenberg = false;
    }, 17500)
}
```
```svelte
<!-- +page.svelte -->
<div class="section save-load-menu">
    <button on:click={Save}>Save</button>
    <button on:click={Load}>Load</button>
    <Heisenberg invis={!heisenberg}></Heisenberg>
    <audio src="/audio/Heisenberg.mp3" bind:this={heisenbergSound}></audio>
</div>
```
Här är en bild på en tom tavla😱:
<img src="/not-trello-screenshot-3.png" alt="sheeesh">