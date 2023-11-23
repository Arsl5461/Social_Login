const express = require("express");
const passport = require("passport");
const session = require("express-session");

const app = express();

app.use(
  session({ secret: "arsl", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./passport");

// Routes
app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? req.user : "Not logged in");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
