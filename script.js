"use strict";

let charCircle = document.getElementsByClassName('characterCircles');
let charCard = document.getElementsByClassName('characterCards');
let mainColor = document.getElementsByClassName('mainColor');
let mainFontColor = document.getElementsByClassName('mainColorFont');
let subColor = document.getElementsByClassName('subColor');
let preButton = document.getElementsByClassName('preButton');
let postButton = document.getElementsByClassName('postButton');
let charPicture = document.getElementsByClassName('characterPic');
let preSkip = document.getElementsByClassName('preSkip');
let postSkip = document.getElementsByClassName('postSkip');

let bigName = document.getElementById('luffyName');
let fullName = document.getElementById('luffyFullName');
let occupation = document.getElementById('luffyOccupation');
let originPlace = document.getElementById('luffyOrigin');
let ability = document.getElementById('luffyAbility');
let bounty = document.getElementById('luffyBounty');

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

        // // Removes .activeCard class and adds .hiddenCard class
        // for (let i = 0; i < charCard.length; i++) {
        //     charCard[i].classList.remove('activeCard');
        //     charCard[i].classList.add('hiddenCard');
        // }
        // // Adds .activeCard and removes .hiddenCard to current characterCard
        // if (charCard[i].id === `${circleID}Card`) {
        //     // console.log(charCard[i]);
        //     charCard[i].classList.add('activeCard');
        //     charCard[i].classList.remove('hiddenCard');
        // }
        
        bigName.innerHTML = document.getElementById(`${circleID}Name`).innerHTML;
        fullName.innerHTML = document.getElementById(`${circleID}FullName`).innerHTML;
        occupation.innerHTML = document.getElementById(`${circleID}Occupation`).innerHTML;
        originPlace.innerHTML = document.getElementById(`${circleID}Origin`).innerHTML;
        ability.innerHTML = document.getElementById(`${circleID}Ability`).innerHTML;
        bounty.innerHTML = document.getElementById(`${circleID}Bounty`).innerHTML;
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


for (let i = 0; i < preButton.length; i++) {
    preButton[i].addEventListener('click', function() {
        for (let i = 0; i < preSkip.length; i++) {
            preSkip[i].classList.add('activeImage');
            preSkip[i].classList.remove('hiddenImage');
        }
        for (let i = 0; i < preSkip.length; i++) {
            postSkip[i].classList.add('hiddenImage');
        }
        // Changing button background
        if (!preButton[i].classList.contains('subColor')) {
            preButton[i].classList.add('subColor');
            postButton[i].classList.remove('subColor');
        }
    })
}


for (let i = 0; i < postButton.length; i++) {
    postButton[i].addEventListener('click', function() {
        for (let i = 0; i < postSkip.length; i++) {
            postSkip[i].classList.add('activeImage');
            postSkip[i].classList.remove('hiddenImage');
        }

        for (let i = 0; i < preSkip.length; i++) {
            preSkip[i].classList.add('hiddenImage');
        }

        if (!postButton[i].classList.contains('subColor')) {
            postButton[i].classList.add('subColor');
            preButton[i].classList.remove('subColor');
        }
    })
}
