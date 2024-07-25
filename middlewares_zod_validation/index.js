const express = require("express");
const app = express();
const z = require("zod")
const mySchema = z.string();

app.use(express.json());


app.post('/', (req, res) => {
    const name = req.body.name;
    // try {
    //     mySchema.parse(name);
    //     res.status(200).json({
    //         msg: "it is a valid string"
    //     });
    // } catch (e) {
    //     res.status(400).json({
    //         msg: "it is not a valid string"
    //     });
    // }

    const response = mySchema.safeParse(name);
    if(response.success === true) {
        res.send("good bouy")
    }
    else{
        console.log(response.error);
        res.send("not good buoy")
    }
})



app.listen(3000, ()=> {
    console.log("app listening on port 3000...")
})