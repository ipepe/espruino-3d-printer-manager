console.log('booted');

var wifi = require("Wifi");
var ssid = "MyPhysicsTrophy-24GHz";
var password = atob("cGF0cnlrOTIx");

wifi.setHostname("espruino" + Date.now());
wifi.stopAP();
wifi.save('clear');
setTimeout(function(){
    wifi.connect(ssid, {password:password}, function(e) {
        if (e) {
            console.log('error during connect:',e);
            wifi.disconnect();
        } else {
            console.log('connected to',ssid);
        }
    });
}, 5000);

wifi.on('connected', function(){
    console.log(arguments);
    wifi.getIP(function(e,info){
        console.log(arguments);
    });
}, 5000);

