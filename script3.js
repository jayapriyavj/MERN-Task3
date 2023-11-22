var allcountryDetails = new XMLHttpRequest();
allcountryDetails.open("GET", "https://restcountries.com/v3.1/all");
allcountryDetails.send();
allcountryDetails.onload = function () {
    var result = JSON.parse(allcountryDetails.response);
    console.log(result);

    for (var i = 0; i <= result.length; i++) {
        var countryName = result[i].name.common;
        var region = result[i].region;
        var subRegion = result[i].subregion;
        var population = result[i].population;

        console.log("CountryName:" + countryName);
        console.log("Region:" + region);
        console.log("SubRegion:" + subRegion);
        console.log("Population:" + population);

    }
}
