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

/* 
Click charCircle and -> happens (id = 'luffy')

- colorBox + bountyBox background color = `var(--${circleID}Main)`
- activeButton + bountyTab backgroundColor = `var(--${circleID}Sub)`
- .characterCards

when you click charCircle, if the charCard with the same id + Card has the activeCard class, remove it
*/

// Changing character theme colours by clicking character buttons
for (let i = 0; i < charCircle.length; i++) {
    charCircle[i].addEventListener('click', function() {
        let circleID = charCircle[i].id;
        // console.log(circleID);

        for (let i = 0; i < mainColor.length; i++) {
            mainColor[i].style.backgroundColor = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < subColor.length; i++) {
            mainFontColor[i].style.color = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < subColor.length; i++) {
            subColor[i].style.backgroundColor = `var(--${circleID}Sub)`;
        }
    })
}
