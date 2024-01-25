const bcrypt = require('bcrypt');

let saltRounds = 12;
let thePainTextPassword = "password123";

bcrypt.hash(thePainTextPassword, saltRounds)
  .then((hash) => {
    // Store hash in our password DB.
    // or insecurity log it!
    console.log(hash);
  })
  .catch((err) => {
    console.log("oopsie: ", err);
  });