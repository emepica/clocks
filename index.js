function upadteTime(){
//LLN

let llnElement = document.querySelector("#lln");
let llnDateElement = llnElement.querySelector(".date");
let llnTimeElement = llnElement.querySelector(".time");
let llnTime = moment().tz("Europe/Brussels");

llnDateElement.innerHTML = llnTime.format("dddd, MMMM Do, YYYY");
llnTimeElement.innerHTML = llnTime.format("hh:M:s [<small>]A[</small>]");

//Bergen 

//let bergenElement = document.querySelector("#bergen");
//let bergenDateElement = bergenElement.querySelector(".date");
//let bergenTimeElement = bergenElement.querySelector(".time");
//let bergenTime = moment().tz("Europe/Oslo");

//bergenDateElement.innerHTML = bergenTime.format("dddd, MMMM Do, YYYY");
//bergenTimeElement.innerHTML = bergenTime.format("hh:M:s [<small>]A[</small>]");
}

function updateCity (event){
    let cityTimezone = event.target.value;
    let cityName = event.target.options[event.target.selectedIndex].text;
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    
    if (cityTimezone.length >0){
        citiesElement.innerHTML =`<div class="city" id="lln">
        <div>
        <p>Time zone : ${cityTimezone}</p>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
        </div>

        <div class="time">${cityTime.format("hh:M:ss [<small>]A[</small>]")}</div>
    </div>
    `;
    }
}


upadteTime();
//setInterval(upadteTime,1000);

let selectedCityElement = document.querySelector("#selectedCity");
selectedCityElement.addEventListener("change",updateCity);
