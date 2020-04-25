$(document).ready(function () {
  console.log("Ready!");
  var city = localStorage.getItem("city");
  openWeatherCall(city);
  appendCity(city);

  $("#search-button").on("click", function () {
    event.preventDefault();
    var cityName = $("#city-input").val().trim();
    // cityName = cityName.toLowerCase();
    localStorage.setItem("city", cityName);

    openWeatherCall(cityName);
    appendCity(cityName);
  });

  function appendCity(cityName) {
    var cityDiv = `<div class="city-button"><button type="button" id="${cityName}" class="btn-block city-button">${cityName}</button></div>`;
    $("#cities-list").prepend(cityDiv);
  }

  function openWeatherCall(cityName) {
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

    var queryURLFiveDay =
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      cityName +
      "&units=imperial&appid=" +
      APIKey;
    var queryURLToday =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial&appid=" +
      APIKey;

    $.ajax({
      url: queryURLFiveDay,
      method: "GET",
    }).then(function (response) {
      // day 1
      var dateOne = moment().format('l'); 
      var iconOneURL =
        "http://openweathermap.org/img/w/" +
        response.list[0].weather[0].icon +
        ".png";
      var tempOne = response.list[0].temp.day;
      var humidityOne = response.list[0].humidity;

      var dayOneHTML =
        `<p><strong>${dateOne}</strong></p>` +
        `<img class="icons" src = ${iconOneURL}></img>` +
        `<p>Temp: ${tempOne} °F</p>` +
        `<p>Humidity: ${humidityOne}%`;

      $(".day-one").html(dayOneHTML);

      // day 2
      var dateTwo = moment().add(1, 'days').calendar();
      var iconTwoURL =
        "http://openweathermap.org/img/w/" +
        response.list[1].weather[0].icon +
        ".png";
      var tempTwo = response.list[1].temp.day;
      var humidityTwo = response.list[1].humidity;

      var dayTwoHTML =
        `<p><strong>${dateTwo}</strong></p>` +
        `<img class="icons" src = ${iconTwoURL}></img>` +
        `<p>Temp: ${tempTwo} °F</p>` +
        `<p>Humidity: ${humidityTwo}%`;

      $(".day-two").html(dayTwoHTML);

      // day 3
      var dateThree = moment().add(2, 'days').calendar();
      var iconThreeURL =
        "http://openweathermap.org/img/w/" +
        response.list[2].weather[0].icon +
        ".png";
      var tempThree = response.list[2].temp.day;
      var humidityThree = response.list[2].humidity;

      var dayThreeHTML =
        `<p><strong>${dateThree}</strong></p>` +
        `<img class="icons" src = ${iconThreeURL}></img>` +
        `<p>Temp: ${tempThree} °F</p>` +
        `<p>Humidity: ${humidityThree}%`;

      $(".day-three").html(dayThreeHTML);

      // day 4
      var dateFour = moment().add(3, 'days').calendar();
      var iconFourURL =
        "http://openweathermap.org/img/w/" +
        response.list[3].weather[0].icon +
        ".png";
      var tempFour = response.list[3].temp.day;
      var humidityFour = response.list[3].humidity;

      var dayFourHTML =
        `<p><strong>${dateFour}</strong></p>` +
        `<img class="icons" src = ${iconFourURL}></img>` +
        `<p>Temp: ${tempFour} °F</p>` +
        `<p>Humidity: ${humidityFour}%`;

      $(".day-four").html(dayFourHTML);

      // day 5
      var dateFive = moment().add(4, 'days').calendar();
      var iconFiveURL =
        "http://openweathermap.org/img/w/" +
        response.list[4].weather[0].icon +
        ".png";
      var tempFive = response.list[4].temp.day;
      var humidityFive = response.list[4].humidity;

      var dayFiveHTML =
        `<p><strong>${dateFive}</strong></p>` +
        `<img class="icons" src = ${iconFiveURL}></img>` +
        `<p>Temp: ${tempFive} °F</p>` +
        `<p>Humidity: ${humidityFive}%`;

      $(".day-five").html(dayFiveHTML);

      //   console.log(response);
    });

    $.ajax({
      url: queryURLToday,
      method: "GET",
    }).then(function (response) {
      var temperature = response.main.temp.toString();
      var humidity = response.main.humidity.toString();
      var windSpeed = response.wind.speed.toString();
      var htmlStr =
        "<h3>" +
        cityName +
        "</h3>" +
        "<p>Temperature: " +
        temperature +
        " °F</p>" +
        "<p>Humidity: " +
        humidity +
        "%</p>" +
        "<p>Wind Speed: " +
        windSpeed +
        " MPH</p>";
      $(".daily-weather").html(htmlStr);
    });
  }

  $(".city-button").on("click", ".city-button", function(){
    event.preventDefault();
    console.log(this);
  })

});
