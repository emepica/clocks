function upadteTime(){
//LLN

let llnElement = document.querySelector("#lln");
let llnDateElement = llnElement.querySelector(".date");
let llnTimeElement = llnElement.querySelector(".time");
let llnTime = moment().tz("Europe/Brussels");

llnDateElement.innerHTML = llnTime.format("dddd, MMMM Do, YYYY");
llnTimeElement.innerHTML = llnTime.format("H:M:s [<small>]A[</small>]");

//Bergen 

let bergenElement = document.querySelector("#bergen");
let bergenDateElement = bergenElement.querySelector(".date");
let bergenTimeElement = bergenElement.querySelector(".time");
let bergenTime = moment().tz("Europe/Oslo");

bergenDateElement.innerHTML = bergenTime.format("dddd, MMMM Do, YYYY");
bergenTimeElement.innerHTML = bergenTime.format("H:M:s [<small>]A[</small>]");
}
upadteTime();
setInterval(upadteTime,1000);