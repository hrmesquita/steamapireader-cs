const express = require("express");
const passport = require("passport");
const session = require("express-session");
const passportSteam = require("passport-steam");
const SteamStrategy = passportSteam.Strategy;
const app = express();

const port = 7069;

// Required to get data from user for sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Initiate Strategy
passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:" + port + "/api/auth/steam/return",
      realm: "http://localhost:" + port + "/",
      apiKey: "1977A35E58B9BAC3A6BFDFE8228B1CE7",
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

app.use(
  session({
    secret: "secret-for-steam-login",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(passport.initialize());

app.use(passport.session());

// Initiate app
app.listen(port, () => {
  console.log("Listening, port " + port);
});

app.get("/", (req, res) => {
  // SEND USER DATA TO YOUR DATA BASE HERE
  res.send(req.user);
  console.log(req.user);
});

// Routes
app.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect(`http://localhost:4200/?steamid=${req.user._json.steamid}`);
  }
);