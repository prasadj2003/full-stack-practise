const express = require("express");
const axios = require("axios");
const app = express();

app.get('/addition', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input');
    }

    const ans = a + b;
    res.send(ans.toString());
})

app.get("/intrest", (req, res) => {
    const p = Number(req.body.p);
    const r = Number(req.body.r);
    const t = Number(req.body.t);

    const intrest = Number(p*r*t)/100;

    res.send(intrest);
})

app.listen(3000);