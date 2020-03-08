const key = 'LZ9IsmtgPsA19f6IUEdCR15Aqfi6S7AL';

const getCityDetails = async (cityName) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const citySearchText = cityName;
    const api = `${url}?apikey=${key}&q=${citySearchText}`;

    const response = await fetch(api);
    const responseData = await response.json();
    
    // console.log(responseData);
    return responseData[0];

};

const getWeather = async (cityKey) => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1';
    const completeUrl = `${url}/${cityKey}?apikey=${key}`;

    const response = await fetch(completeUrl);

    const responseData = await response.json();
    return responseData[0];
}

// async always returns promise for which we can use then and catch
// getCityDetails().then(data => {
//     const cityKey = data.Key;
//     return getWeather(cityKey); // this will return promise.
// }).then(data => {
//     console.log(data)
// }).catch(err => console.log(err));