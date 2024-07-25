const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://ppjoshi2003:1U0pNt9vadbrgYk6@cluster0.llc93zm.mongodb.net/100xDevs",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  // should check in the database
  const findUser = await User.findOne({username: username, password: password})
  return findUser !== null;
}

app.post('/signup', async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({username: username});
    if(existingUser) {
        res.send("user already exists with the same username")
    }
    else{
        const user = new User({
            name: name,
            username: username,
            password: password
        })

        try {
            await user.save();
            res.send("user registered successfully")
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while registering the user');
        }
    }
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);