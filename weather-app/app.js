const cityForm = document.querySelector('.weather_app');
// Add eventlistener like enter and then submit etc.

const getCityAndWeather = async (citySearchText) => {
    console.log('Getting value of ', citySearchText);
    const cityDetails = await getCityDetails(citySearchText);
    const weatherDetails = await getWeather(cityDetails.Key);

    console.log(cityDetails);
    console.log(weatherDetails);
    localStorage.setItem('city', citySearchText);
    return { cityDetails, weatherDetails };
};

const updateUI = (cityDetails, weatherDetails) => {
    const cityName = cityDetails.EnglishName;
    const weatherText = weatherDetails.WeatherText;
    const temp = weatherDetails.Temperature.Metric.Value;
    const isDayTime = weatherDetails.IsDayTime;
    let image = "";
    if (isDayTime === true) {
        image = "images/daytime.svg";
    } else {
        image = "images/nighttime.svg";
    }
    const card = document.querySelector('.weather_info_div');

    card.innerHTML = `
    <img src="${image}" alt="weather_mage" class="weather_icon">
                <p class="weather_city_name">City Name: ${cityName}</p>
                <p class="weather_cond">Weather Condition: ${weatherText}</p>
                <p class="weather_temp">Temperature: ${temp} °C</p>
    `
};
cityForm.addEventListener('submit', e => {
    //     // Prevent default action like refresh page etc.
    e.preventDefault();

    const cityValueInText = cityForm.city_search.value.trim();
    console.log("City search text: ", cityValueInText);
    cityForm.reset();

    const results = getCityAndWeather(cityValueInText);

    // results is promise here, so fetch the value using then and catch.
    results.then(data => {
        updateUI(data.cityDetails, data.weatherDetails);
    }).catch(err => {
        console.log(err);
    })
});

if(localStorage.getItem('city')) {
    const cityName = localStorage.getItem('city');
    const results = getCityAndWeather(cityName);
    // results is promise here, so fetch the value using then and catch.
    results.then(data => {
        updateUI(data.cityDetails, data.weatherDetails);
    }).catch(err => {
        console.log(err);
    })
}