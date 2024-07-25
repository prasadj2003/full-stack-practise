const jwt = require("jsonwebtoken");
const password = "1234";

const token = jwt.sign({
    name: "Prasad"
}, password);

// const val = jwt.verify(token, "65989"); --> gives error
const val  = jwt.verify(token, password);

console.log(token);
console.log(val);