# Coola features:

Man kan göra nya listor nu för tiden. Utöver detta kan man också trycka save och load för att spara och loada 😱. Det har tillkommit några nya idéer under arbetet, t.ex att invalid image URLs blir denna bild:
<img src="/icons/image-not-found.png" alt="yup" id="camera">

<style>
    #camera {
        aspect-ratio: 1;
        width: 35%;
    }
</style>

Detta är ett till feature jag har lagt till sen det senaste inlägget. Fler idéer som kommit till inkluderar följande:

* Få tom tavla att se bättre ut
* Fixa en load animation som ser cool ut
* Fixa en save animation så att man faktiskt ser när man savear
* Fixa nån grej som tar in en image file och laddar upp den till imgur och kopierar URL till denna hemsida.

Dessa features är inkluderade i den följande listan.
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

❌Få tom tavla att se bättre ut

❌Fixa en load animation som ser cool ut

❌Fixa en save animation så att man faktiskt ser när man savear

### Features jag gör om jag varit on the grind

❌3d animations😎

❌Fixa nån grej som tar in en image file och laddar upp den till imgur och kopierar URL till denna hemsida.

# Annan info:

Dokumenterat den 4 / 5 - 2023

# Lite mer roliga grejer 🤓

Här är koden som checkar image URLs:
```js
if(card.type == "image"){
    const img = new Image();
    img.src = JSON.parse(JSON.stringify(card.value))

    img.onload = () => {
        card.value = img.src;

        lists[0].cards.unshift(JSON.parse(JSON.stringify(card)));

        lists = lists;

        UpdateElementReferences()
    }
    img.onerror = () => {
        card.value = "icons/image-not-found.png"

        lists[0].cards.unshift(JSON.parse(JSON.stringify(card)));

        lists = lists;

        UpdateElementReferences()
    }
}
else {
    lists[0].cards.unshift(JSON.parse(JSON.stringify(card)));
    
    lists = lists;

    UpdateElementReferences()
}
```
Galen save/load-kod:
```js
function Save(){
    localStorage.setItem("LISTS", JSON.stringify(lists))
}
function Load(){
    lists = JSON.parse(localStorage.getItem("LISTS"))
}
```


Här är en screenshot
<img src="/not-trello-screenshot-2.png" alt="suiiii">

Så här ser det ut när man gör en ny lista:

<img src="/new-list-sc.png" alt="sheesh">