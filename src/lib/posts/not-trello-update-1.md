# Coola features:
<ul>
    <li>Man kan flytta listor</li>
    <li>Man kan flytta kort mellan listor</li>
    <li>Man kan ta bort kort och listor</li>
    <li>Man kan skapa nya kort av olika typer</li>
</ul>

Dokumenterat den 17 / 4 - 2023

Lite source code:

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
<img src="/not-trello-screenshot-1.png" alt="waltuh">