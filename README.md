# node-mqtt-analytical-balance-simulator
This is the instrument simulator app. The driver front end (angular) app and the backend app is hosted separately.

INSTALLATION:
1.	Download node from the web: https://nodejs.org/en/download/ and install.
2.	Open command prompt and install npm in your system globally, next enter the following commands:<br />
•	npm i<br />
•	npm start<br />


ALGORITHM:
1.	The instrument and driver use MQTT protocol for the data transfer and monitoring. The data flow diagram below well explains the overall workflow.
2.	In this project the instrument is continuously publishing the data to the broker.
3.	The device has subscribed to the instrument published data through the broker.
4.	On sending the command through the Driver it will show the respective value.
5.	To demonstrate we have taken the random value generator function and with the probability it is showing the weights


WEIGHTS:
1.	Stable weight – 80%<br />
2.	Command not executable – 10%<br />
3.	Balance in overload range – 5%<br />
4.	Balance in underload range – 5%<br />
 
 <img width="493" alt="Driver-insrument-block_Dig" src="https://user-images.githubusercontent.com/53856363/183771555-fe4cf56c-45bf-4825-9fd0-556b8af09e58.png">
