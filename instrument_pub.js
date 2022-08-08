const http = require('http');
const mqtt = require('mqtt');

var client = mqtt.connect('mqtt://broker.hivemq.com');

const hostname = '127.0.0.1';
const port = 3000;

client.on('connect', function () {

    setInterval(publishStableWeight, 1000);

    var count = 0;
    var ds = Math.random();
    ds = ds * 100;

    function publishStableWeight() {
        count++;
        if (ds != 0) {
            if (count != 5)
                ds = (ds * 100 + 1) / 100;
        }

        client.publish('instrument_data', 'The weight is : ' + ds.toString() + ' gm.');
        console.log(count + " is count and ds is  " + ds);

        if (count == 5) {
            count = 0;
            var random = Math.random();
            if (random < 0.8000) {
                ds = Math.random();
                ds = ds * 100;
            }
            else if (random < 0.9000) {
                ds = 0;
                client.publish('instrument_data', "Command not executable.")
            }
            else if (random < 0.9500) {
                ds = 0;
                client.publish('instrument_data', "Balance in Underload range.")
            }
            else if (random < 0.9900) {
                ds = 0;
                client.publish('instrument_data', "Balance in Overload range.");
            }
            else
                ds = 0;
        }
    }
})
