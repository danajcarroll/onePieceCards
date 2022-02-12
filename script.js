"use strict";

let charCircle = document.getElementsByClassName('characterCircles');
let charCard = document.getElementsByClassName('characterCards');
let mainColor = document.getElementsByClassName('mainColor');
let mainFontColor = document.getElementsByClassName('mainColorFont');
let subColor = document.getElementsByClassName('subColor');

// Changing character circle colours!
for (let i = 0; i < charCircle.length; i++) {
    let circleID = charCircle[i].id;
    charCircle[i].style.backgroundColor = `var(--${circleID}Main)`;
};

// Character Button Click
for (let i = 0; i < charCircle.length; i++) {
    charCircle[i].addEventListener('click', function() {
        let circleID = charCircle[i].id;
        console.log(circleID);

        // Removes .activeCard class and adds .hiddenCard class
        for (let i = 0; i < charCard.length; i++) {
            charCard[i].classList.remove('activeCard');
            charCard[i].classList.add('hiddenCard');
        }
        // Adds .activeCard and removes .hiddenCard to current characterCard
        if (charCard[i].id === `${circleID}Card`) {
            console.log(charCard[i]);
            charCard[i].classList.add('activeCard');
            charCard[i].classList.remove('hiddenCard');
        }
        
        // Changing color theme
        for (let i = 0; i < mainColor.length; i++) {
            mainColor[i].style.backgroundColor = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < mainFontColor.length; i++) {
            mainFontColor[i].style.color = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < subColor.length; i++) {
            subColor[i].style.backgroundColor = `var(--${circleID}Sub)`;
        }
    })
}
