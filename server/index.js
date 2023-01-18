const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createGoal, getMotivated, getColor, getRandomTime } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/motivation", getMotivated)
app.get("/api/color", getColor)
app.get("/api/randomTime", getRandomTime)

app.post("/api/goal", createGoal)
// I tried using this post method, and my code is working but I can't figure out how to tie
// it into my html and display it at this point. I ran out of time.

app.listen(4000, () => console.log("Server running on 4000"));
