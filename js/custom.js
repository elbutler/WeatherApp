function showWeather(zip) {
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=f7244cc216650264b61ba2064c41856c&units=metric')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            displayWeather(myJson);

        });
}

function showPosition(position) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=f7244cc216650264b61ba2064c41856c&units=metric')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            displayWeather(myJson);

        });
}


function displayWeather(myJson) {
    console.log(myJson);
    //display current temperature
    var temp = myJson.main.temp;

    var element = document.getElementById("temp");
    element.innerHTML = temp.toFixed(0) + " °C";

    //display icons
    var icon = myJson.weather[0].icon;

    var element = document.getElementById("icon");
    element.innerHTML = "<img src=http://openweathermap.org/img/wn/" + icon + ".png>";

    //display city 
    var city = myJson.name;

    var element = document.getElementById("city");
    element.innerHTML = "Current Temperature for " + city + " is: ";

    //display feels like
    var feels_like = myJson.main.feels_like;

    var element = document.getElementById("feels_like");
    element.innerHTML = "Feels like: " + feels_like.toFixed(0) + " °C";

    //display max temp
    var temp_max = myJson.main.temp_max;

    var element = document.getElementById("temp_max");
    element.innerHTML = "Max Temperature: " + temp_max.toFixed(0) + " °C";

    //display min temp
    var temp_min = myJson.main.temp_min;

    var element = document.getElementById("temp_min");
    element.innerHTML = "Min Temperature: " + temp_min.toFixed(0) + " °C";

};

function myFunction() {
    var zip = document.getElementById("zip").value;
    showWeather(zip);
}