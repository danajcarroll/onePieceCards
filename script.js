"use strict";

let charCircle = document.getElementsByClassName('characterCircles');

for (let i = 0; i < charCircle.length; i++) {
    let circleID = charCircle[i].id;
    charCircle[i].style.backgroundColor = `var(--${circleID}Main)`;
}
