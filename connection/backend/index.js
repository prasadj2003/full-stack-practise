// const express = require("express");
// const app = express();
// const {heading} = require("./db.js");

// app.use(express.json());

// app.post("/add", async (req, res) => {
//     const headingText = req.body.heading;

//     try {
//         const result = await heading.save();
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(411).json({
//             msg: "error putting data in the database",
//             error: error
//         });
//     }

// })


// app.listen(3000, () => {
//     console.log("app listening");
// })


const express = require("express");
const app = express();
const { heading } = require("./db.js");
const cors = require("cors");


// Use express.json() middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
    const headingText = req.body.heading;

    if (!headingText) {
        return res.status(400).json({ msg: "heading is required" });
    }

    try {
        // Create a new heading instance and save it
        const newHeading = new heading({ heading: headingText });
        const result = await newHeading.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            msg: "error putting data in the database"
        });
    }
});


app.get("/headings", async (req, res) => {
    try {
        const headings = await heading.find();
        res.status(200).json(headings);
    } catch (error) {
        res.status(500).json({
            msg: "error fetching data from the database"
        });
    } 
});

app.listen(3000, () => {
    console.log("app listening on port 3000");
});
