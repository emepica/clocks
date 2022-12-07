function updateTime(){
//BXL

let bxlElement = document.querySelector("#bxl");
let bxlDateElement = bxlElement.querySelector(".date");
let bxlTimeElement = bxlElement.querySelector(".time");
let bxlTime = moment().tz("Europe/Brussels");

bxlDateElement.innerHTML = bxlTime.format("dddd, MMMM Do, YYYY");
bxlTimeElement.innerHTML = bxlTime.format("hh:M:ss [<small>]A[</small>]");

//Bengaluru 

let bglElement = document.querySelector("#bgl");
let bglDateElement = bglElement.querySelector(".date");
let bglTimeElement = bglElement.querySelector(".time");
let bglTime = moment().tz("Asia/Calcutta");

bglDateElement.innerHTML = bglTime.format("dddd, MMMM Do, YYYY");
bglTimeElement.innerHTML = bglTime.format("hh:M:ss [<small>]A[</small>]");
}

function updateCity (event){
    let cityTimezone = event.target.value;
    let cityName = event.target.options[event.target.selectedIndex].text;
    clearInterval(updateTime());
    updateCityInterval(cityTimezone, cityName);
    interval = setInterval(() => {
      updateCityInterval(cityTimezone, cityName);
    }, 1000);
}
function updateCityInterval(cityTimezone, cityName) {
    if (cityTimezone==="current"){
        cityTimezone= moment.tz.guess();
        cityName = cityTimezone.replace("_", " ").split("/")[1];}
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    
    if (cityTimezone.length >0){
        citiesElement.innerHTML =`<div class="city" id="bxl">
        <div>
        <p>Time zone : ${cityTimezone}</p>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
        </div>

        <div class="time-city">${cityTime.format("hh:M:ss [<small>]A[</small>]")}</div>
       
    </div>
    <a href="index.html" class="city">← Back </a>
    `;
    } 
    else {
        location.reload();
    }
}


let interval;
updateTime();
interval = setInterval(updateTime, 1000);

let selectedCityElement = document.querySelector("#selectedCity");
selectedCityElement.addEventListener("change",updateCity);
