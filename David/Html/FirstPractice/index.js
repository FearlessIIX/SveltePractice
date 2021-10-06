let btn1 = document.getElementById("btn-1");

let btn2 = document.getElementById("btn-2");
let btn2Meta = {
    //The non-hover background color
    bgC : "rgb(204, 201, 201)",
    //The hover background color
    bgCH : "aquamarine",
    //Whether or not the button is hovered, used for focus purposes
    isHover : false
};

let btn3 = document.getElementById("btn-3");


// On click listeners for the Three Buttons //
// btn1.onclick(e => cBtn1());
// btn2.onclick(e => cBtn2());  these three work just fine, they stay because i can lol
// btn3.onclick(e => cBtn3());
btn1.addEventListener("click", e => cBtn1());
btn2.addEventListener("click", e => cBtn2());
btn3.addEventListener("click", e => cBtn3());

// These two act as an "on:hover" style for the button
btn2.addEventListener("mouseover", e => mEnBtn2());
btn2.addEventListener("mouseout", e => mLeBtn2());
// These two act as an "on:focus" style for the button
btn2.addEventListener("focusin", e => fInBtn2());
btn2.addEventListener("focusout", e => fOuBtn2());


//Functions for "btn1"
function cBtn1() {
    btn1.textContent = "You Clicked Me!!";
}

//Functions for "btn2"
function cBtn2() {
    btn2.style.border = "black solid 3px";
    btn2.style.borderRadius = "10px";
    btn2.style.backgroundColor = "blue";

    //sets the return/non-hover background for the button to the new color, "blue"
    btn2Meta.bgC = "blue";
    //used for when the button is pressed, re-fires the function when the user is still hovering over the button
    //doesn't fire if the user has used "tab" to select the button
    if (btn2Meta.isHover) { mEnBtn2(); }
}
function mEnBtn2() {
    //sets a flag telling that the element is currently being hovered
    btn2Meta.isHover = true;
    btn2.style.backgroundColor = btn2Meta.bgCH;
}
function mLeBtn2() {
    //sets a flag telling that the element is no longer hovered
    btn2Meta.isHover = false;
    btn2.style.backgroundColor = btn2Meta.bgC;
}
function fInBtn2() {
    btn2.style.borderColor = "darkgreen";
}
function fOuBtn2() {
    btn2.style.borderColor = "black";
}

//Functions for "btn3"
function cBtn3() {
    let content = btn3.textContent;
    var pre = content.split(" ")[0];    //"Number: "
    var num = content.split(" ")[1];    //The number displayed
    //Cast the String to a number
    var intNum;
    try {
        intNum = Number(num);
    }
    catch (e) {intNum = 0}

    intNum = intNum + 1;
    btn3.textContent = `${pre} ${intNum}`;
    
    //Fired to change the text below this button
    numChange(intNum);
}

/*
    This function is supposed to extract the text from the p element
    Then it will use the current number value to decide whether or not it needs to update the text 
    Then it will update the necessary text to say whatever they need to say
    Examples are whether the number is even or odd, if the number is divisible by 2 or 5
 */
function numChange(number) {
}
