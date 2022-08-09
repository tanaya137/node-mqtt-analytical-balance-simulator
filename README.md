# node-mqtt-analytical-balance-simulator
This is the instrument simulator app. The driver front end (angular) app and the backend app is hosted separately.

INSTALLATION:
1.	Download node from the web: https://nodejs.org/en/download/ and install.
2.	Open command prompt and install npm in your system globally, next enter the following commands:<br />
•	npm i<br />
•	npm start<br />


ALGORITHM:
1.	The instrument and driver use MQTT protocol for the data transfer and monitoring. The data flow diagram below well explains the overall workflow.
2.	In this project, the node app tries to simulate an environment similar to an analytical instrument for measuring weights. 
3.	Based on the weighted probabilities, a random state is simulated (Dynamic Weight/NotExecutable/Overload/Underload).   
4.	This node app is continuously publishing the  instrument simulator data every second to the public broker.
5.	The device has subscribed to the instrument published data through the broker.
6.	Driver app can send this data to the Front end app based on received command (S, SI, SIR) in form of API response.


WEIGHTS:
1.	Dynamic/Stable weight – 80%<br />
2.	Command not executable – 10%<br />
3.	Balance in overload range – 5%<br />
4.	Balance in underload range – 5%<br />
 
 <img width="493" alt="Driver-insrument-block_Dig" src="https://user-images.githubusercontent.com/53856363/183771555-fe4cf56c-45bf-4825-9fd0-556b8af09e58.png">
