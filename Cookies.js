const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Would you like some Cookies? I know I do!');
});

app.get('/login', (req, res) => {
  const { name } = req.query;
  res.cookie('name', name);
  res.send(`Cookie for ${name} is set!  Now I have all your info lol!`);
});

app.get(`/home`, (req, res) => {
  const { name } = req.cookies;
  if (name) {
    res.send(`Welcome ${name}! This is your home now!`);
  } else {
    res.send('No name cookie found :(');
  }
});

app.listen(5050, () => console.log('Server is running on port 5050'));