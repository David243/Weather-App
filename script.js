let weather =
    {
        "apiKey": "d815cf48153ad79ce73196e79191001c",
        fetchWeather: function (city) {
            //fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
            fetch("http://localhost/Backend.php?q=" + city)
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
            const {name} = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const {speed} = data.wind;
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".temp").innerText = temp + " °F";
            document.querySelector(".description").innerText = description;
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind speed: " + speed + "mph";
            document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "')"
        },
        search: function () {
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
    };


//first function
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} where is {city name} first parameter and {API key} second parameter. q= inputs
//Once API key was activated you can see all information need it. To change temperature units we have to look at API: units=metric  https://api.openweathermap.org/data/2.5/weather?q=NewYorkCity&units=metric&appid=d815cf48153ad79ce73196e79191001c
//Now we can allow to work in any city: q=Brooklyn change to q=" + city + " (city is parameter) and "units=imperial&appid=" (it taken from url above and delete api key and subscituted with variable apiKey) + apiKey; "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey; To make them more readable start them in new line. appid = this.apiKey;
//We can write new function that will display the weather on a page displayWeather: that will be the function that take data and display weather
//here end of first function description

//Exta
//To change JSON lower case data to capital letter - select that class then text-transofm: Capitalize



//Searches when user presses the search button
document.querySelector(".search button").addEventListener('click', function(){
    weather.search();
});
//Searches when user presses the "Enter" key on keyboard
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

