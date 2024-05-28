# Api Automation Exercise
This is an automation exercise to showcase my knowledge of API automation

## Tasks
* Provide an automation script for the API requests in this API documentation: https://restful-booker.herokuapp.com/apidoc/index.html
* API Requests you are to focus on:
  | API Requests |
  |----------------|
   | Create a booking |
  | Get the booking created above |
  | Update the booking (change checkout date and additional needs) |


## API Test Suite
  | API	 | API	REQUEST TYPE |	TEST SCENARIOS |	EXPECTED RESULT AND STATUS CODE |	ACTUAL RESULT AND STATUS CODE	| OBSERVATION |
  |------------------|------------------|-----------------|----------------------------------|	------------------------------|------------ |
  | CreateBooking | POST | Confirm that user can successfully create a booking | Success 200 |	Okay | Pass |
  | GetBooking | GET | Confirm that user can successfully Get the booking created above | Success 200 |	Okay | Pass |
  | UpdateBooking | PUT | Confirm that user can successfully Update the created booking (change checkout date and additional needs) | Success 200 |	Okay | Pass |
  
