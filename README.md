# Cookie Monster

# Express Cookie Example

This is a simple example of using cookies in an Express.js application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/visionthex/cookiemonster
   ```

2. Install dependencies:
   ```bash
   npm install express nodemon cookie-parser bcrypt
   ```

## How to Test Cookie Feature (/login)

To test the cookie feature, follow these steps:

1. Start the server:
   ```bash
   npm start
   ```

2. Open a web browser or use an API testing tool like Postman.

3. Send a GET request to the following URL:
   ```
   http://localhost:5050/login?name=YourName
   ```
   Replace `YourName` with the name you want to set in the cookie.

4. After sending the request, you should receive a response indicating that the cookie has been set for the provided name.

5. To verify that the cookie is set, you can send another GET request to:
   ```
   http://localhost:5050/home
   ```
   This route will display a personalized welcome message if the `name` cookie is set.

6. If the cookie is set correctly, you should see a welcome message with the name you provided earlier.

## app.js

This is just a simple node server.

## Secrets.js
1. Install dependencies:
   ```bash
   node secret.js
   ```
2. This will show you the hash of the crappy password provided.  You can change the thePlainTextPassword with whatever you want to see the hash.

```javascript
let thePainTextPassword = "Replace-with-anything";
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
