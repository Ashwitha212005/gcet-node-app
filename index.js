import express from 'express'
const app = express();
app.listen(8080,()=>{
    console.log("Server started");
});
app.get("/", (req, res)=>{
    return res.send("Good morning");
});
app.get("/greet", (req, res)=>{
     res.send("good evening");
});
app.get("/name", (req, res)=>{
     res.send("ashwitha");
});
