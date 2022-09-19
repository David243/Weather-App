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

