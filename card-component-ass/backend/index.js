import express from "express";
import User from "./connection/connect.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());


app.get("/users", async (req, res) => {
    try {
        const result = await User.find({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            msg: "error getting user details"
        })
    }
})

app.post("/add", async (req, res) => {

    try {
        const {name, age, followers, likes, photos} = req.body;
        const newUser = new User({
            name,
            age,
            followers,
            likes,
            photos
        });
   
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
})

app.listen(3000, () => {
    console.log("app listening on port 3000");
})