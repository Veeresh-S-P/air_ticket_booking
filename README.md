# Air Ticket Booking

```js
 routes: {
            userRoute: {
                register: { METHOD: "POST", ENDPOINT: '/api/register', DESCRIPTION: 'This endpoint should allow users to register. Hash the password on store' },
                login: { METHOD: "POST", ENDPOINT: '/api/login', DESCRIPTION: 'This endpoint should allow users to login. Return JWT token on successful login.' }
            },
            flightRouter: {
                getAllFlight: { METHOD: "GET", ENDPOINT: '/api/flights', DESCRIPTION: 'This endpoint should return a list of all available flights.' },
                getFlightById: { METHOD: "GET", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should return the details of a specific flight identified by its ID.' },
                addNewFlight:{ METHOD: "POST", ENDPOINT: '/api/flights', DESCRIPTION: ' This endpoint should allow users to add new flights to the system.' },
                updateFlightData:{ METHOD: "PUT / PATCH ", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should allow users to update the details of a specific flight identified by its ID.' },
                deleteFlightById:{ METHOD: "DELETE", ENDPOINT: '/api/flights/:id', DESCRIPTION: 'This endpoint should allow users to delete a specific flight identified by its ID.' }
            },
  
        }
```
