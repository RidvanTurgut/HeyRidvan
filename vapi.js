// vapi.js

// URL'den mmrInfo parametresini alma
var url = window.location.href;
var paramsIndex = url.indexOf('?');
if (paramsIndex !== -1) {
    var paramsString = url.slice(paramsIndex + 1);
    var paramsArray = paramsString.split('&');
    var params = {};
    paramsArray.forEach(function(param) {
        var keyValue = param.split('=');
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        params[key] = value;
    });
    var mmrInfo = params['mmrInfo'];

    // mmrInfo değerini mmrInfoContainer div'inin içine yerleştirme
    var mmrInfoContainer = document.getElementById("mmrInfoContainer");
    mmrInfoContainer.textContent = mmrInfo;
}
