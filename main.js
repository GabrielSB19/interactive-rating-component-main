"use strict";

let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thankyou-state__result--number");
let submitBtn = document.querySelector(".rating-state__button");
let ratingState = document.querySelector(".rating-state");
let thankyouState = document.querySelector(".thankyou-state");

let select = false;

numberContainer.addEventListener("click", (e) => {
    let numberSelect = e.target.innerHTML;
    rateNumber.innerText = numberSelect;
    select = true;
});

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(select){
        ratingState.style.display = "none";
        thankyouState.style.display = "flex";
    }
})