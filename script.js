var likes1Element = document.querySelector("#vary1");
var basis1Element = document.querySelector("#basis1");
var likes2Element = document.querySelector("#vary2");
var basis2Element = document.querySelector("#basis2");
var likes3Element = document.querySelector("#vary3");
var basis3Element = document.querySelector("#basis3");
var likes1 = 0;
var likes2 = 0;
var likes3 = 0;

function likecounter1(){
    if(likes1==0){
        basis1Element.innerText = "like";
    }
    else{basis1Element.innerText = "likes"}
    likes1++;
    likes1Element.innerText = likes1;
}
function likecounter2(){
    if(likes2==0){
        basis2Element.innerText = "like";
    }
    else{basis2Element.innerText = "likes"}
    likes2++;
    likes2Element.innerText = likes2;
}
function likecounter3(){
    if(likes3==0){
        basis3Element.innerText = "like";
    }
    else{basis3Element.innerText = "likes"}
    likes3++;
    likes3Element.innerText = likes3;
}