# Coola features:

Just nu har jag fixat ett system där man kan göra flera listor med små kort som kan innehålla text, en bild eller en länk. Man kan flytta runt de här korten i listorna och från en lista till en annan. Det är också möjligt att skapa nya kort och ta bort kort. Listor går också att ta bort och flytta runt. 

# Coola featurs igen 😐:

### Nödvändiga features

✅Göra todo-listor och grejer inuti dem.

✅Flytta grejer mellan listor.

✅Flytta listor

❌Save / Load

✅Skapa nya kort

❌Skapa nya listor

### Mindre kritiska features

✅Kunna skicka in bilder i listorna

✅Kunna ha länkar i listorna

### Features jag vill göra i mån om tid

❌Flera tavlor.

❌Redigera kort / listor

❌Flera color-themes.

### Features jag gör om jag varit on the grind

❌3d animations😎

# Annan info:

Dokumenterat den 20 / 4 - 2023

# Lite source code:

```js
let cardIsMoving = false;

let currentCard = [-1, -1]
let closestCard = [-1, -1]
function MoveCard(i, j){
    if(lists[i].cards[j].moving != cardIsMoving){
        return;
    }
    if(!lists[i].cards[j].moving){
        cardAdded();
        lists[i].cards[j].moving = true;
        GenerateListPositions()
        for (let k = 0; k < listPositions.length; k++) {
            listPositions[k] += GetElementWidth(listElements[k]) / 2;
        }
        currentCard = [i, j];
        cardIsMoving = true;

        lists[currentCard[0]].elements[currentCard[1]].style.left = mouse.x + "px";
        lists[currentCard[0]].elements[currentCard[1]].style.top = mouse.y + "px";

        closestCard[0] = GetClosestIndexInArray(mouse.x, listPositions)
        const arr = []
        for (let i = 0; i < lists[closestCard[0]].elements.length; i++) {
            if(lists[closestCard[0]].elements[i].classList.contains("movingCard")){
                continue;
            }
            if(lists[closestCard[0]].elements[i] != null){
                arr.push(GetTopValue(lists[closestCard[0]].elements[i]));
            }
            if(lists[closestCard[0]].elements.length - i == 1){
                arr.push(GetBottomValue(lists[closestCard[0]].elements[i]) + 10)
            }
        }
        arr.sort((a,b) => a - b)
        closestCard[1] = GetClosestIndexInArray(mouse.y, arr)
    }
    else if(lists[i].cards[j].moving){
        //Snap it to the closest card position.

        if(deleteCardHover){
            DeleteCard(i, j);
            return;
        }
        lists[i].cards[j].moving = false;
        cardIsMoving = false;
        const el = lists[i].cards.splice(j, 1);
        lists[i].cards = lists[i].cards
        lists[closestCard[0]].cards.splice(closestCard[1], 0, ...el)
        lists[closestCard[0]].cards = lists[closestCard[0]].cards;
        lists = lists;
        currentCard = [-1, -1]
    }
    
}
```

# Screenshot

<img src="/not-trello-screenshot-1.png" alt="waltuh">