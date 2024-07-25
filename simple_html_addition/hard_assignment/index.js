const express = require("express");
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());
app.get("/interest", (req, res) => {
    const p = Number(req.query.principal);
    const r = Number(req.query.rate);
    const t = Number(req.query.time);

    const interest = (p*r*t)/100;
    const total = p+interest;

    res.json({
        total: total,
        interest: interest
    });
});

app.listen(3000, () => {
    console.log("app listening on port 3000...");
})