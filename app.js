const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const port = process.env.PORT || 5001;

// app.get('/', (req, res) => {
//   res.send({
//     bye : 'there!!!!'
//   })
// })

passport.use(new GoogleStrategy())

app.listen(port)
