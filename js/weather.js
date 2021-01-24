const weather = document.querySelector('.weatherinfo');
const wicon = document.querySelector('.wicon');
const loc = document.querySelector('.location');

const WEATHER = 'weather';
const LOCATION = 'location';
const WEATHER_APIKEY = '52b3a3e3ab0e8e3840bbb22207ad6216';

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function requestWeather(Location) {
    let iconcode;
    let iconurl;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=${WEATHER_APIKEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            console.log(json.name);
            console.log(json.weather);
            localStorage.setItem(LOCATION, ` ${json.name}`);
            localStorage.setItem(WEATHER, ` ${json.main.temp}`);
            iconcode = json.weather[0].icon;
            iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';
        })
        .then(function () {
            loc.innerText = localStorage.getItem(LOCATION);
            weather.innerText = localStorage.getItem(WEATHER);
            wicon.setAttribute('src', iconurl);
        });
}
function getLocationSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const Location = {
        latitude: latitude,
        longitude: longitude,
    };
    requestWeather(Location);
    // saveToStrage(Location);
}

function getLocationError(error) {
    console.log(error);
}

function getLocation() {
    const location = navigator.geolocation.getCurrentPosition(
        getLocationSuccess,
        getLocationError
    );
}

function init() {
    getLocation();
}

init();
