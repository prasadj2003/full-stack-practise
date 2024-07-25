// const express =require("express");
import express from "express";
import {generate, count} from "random-words"
import cors from "cors"
const app = express();



app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const randomWordArr = generate(5);
    res.json(randomWordArr)
})

app.listen(3000, () => {
    console.log("app listening...");
})