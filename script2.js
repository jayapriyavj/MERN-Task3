var allNationflag = new XMLHttpRequest();
allNationflag.open("GET", "https://restcountries.com/v3.1/all");
allNationflag.send();
allNationflag.onload = function () {
    var result = JSON.parse(allNationflag.response);
    console.log(result);

    for (var i = 0; i <= result.length; i++) {
        var countryFlag = result[i].flags.png
        console.log(countryFlag)
    }
}
