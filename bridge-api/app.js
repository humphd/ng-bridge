// Read in .env config info
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// We need the cors middleware to allow cross-origin resource sharing
const cors = require('cors');

const users = require('./users');

// PassportJS and JWT
const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const bridgesRouter = require('./routes/bridges');
const authRouter = require('./routes/auth');

const app = express();

// Add CORS `Access-Control-Allow-Origin: *` header to responses
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Add middleware for PassportJS
app.use(passport.initialize());
// Add a new JWT passport strategy
passport.use(new Strategy(
  {
    // We will extract the JWT from the Authorization header
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    // We will use the secret provided in the env
    secretOrKey: process.env.JWT_SECRET
  },
  // This is our verification function.  We verify a token and its claims are valid.
  function verify(payload, done) {
    if(!payload) {
      return done(null, false);
    }

    // See if the user in this token is still in our database.
    const user = users.byUsername(payload.sub);
    if(!user) {
      return done(null, false);
    }

    // Looks good, allow this user to continue
    done(null, {
      username: user.username,
      fullname: user.fullname
    });
  }
));

// All routes will get mounted to http://localhost:3000/api/*
app.use('/api', bridgesRouter);
app.use('/auth', authRouter);

module.exports = app;
