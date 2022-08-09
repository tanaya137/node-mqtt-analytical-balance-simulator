const http = require('http');
const mqtt = require('mqtt');

var client = mqtt.connect('mqtt://broker.hivemq.com');

const hostname = '127.0.0.1';
const port = 3000;

client.on('connect', function () {

    setInterval(publishStableWeight, 1000);

    var count = 0;
    var ds = Math.random();
    ds = (ds * 100).toFixed(2);
var random;
    function publishStableWeight() {
        
      
        
        if(count==0)
            {random = Math.random();
             console.log(random+" is generated");
        }
        
          if (ds != 0) {
            if (count != 4)
                ds = ((ds * 100 + 1) / 100).toFixed(2);
        }
        console.log("before loop random "+random);
        if (random < 0.8000){
            
            
            
            if(count<3)
        client.publish('instrument_data', 'Dynamic weight is : ' + ds.toString() + ' gm.');            
            else
        client.publish('instrument_data', 'Stable weight is : ' + ds.toString() + ' gm.');            
        }
        else if (random < 0.9000)
        client.publish('instrument_data', "Command not executable.");
        else if (random < 0.9500)
        client.publish('instrument_data', "Underload range");
        else if (random < 0.9900)
        client.publish('instrument_data', "Overload range");
        else
        client.publish('instrument_data', 'The weight is :0 gm.');
        
        
        console.log(count + " is count and ds is  " + ds);
        if (count == 4) {
            count = -1;
            
            console.log("random ="+random);
            if (random < 0.8000) {
                ds = Math.random();
                ds = (ds * 100).toFixed(2);
            }
            else if (random < 0.9000) {
                ds = 0;
            }
            else if (random < 0.9500) {
                ds = 0;
            }
            else if (random < 0.9900) {
                ds = 0;
            }
            else
                ds = 0;
        }
        
        
        count++;
    }
})
