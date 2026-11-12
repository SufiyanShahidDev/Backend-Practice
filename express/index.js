import express from 'express'


const app = express();


app.use(express.json())
app.get("/", (req, res) => {
    
    console.log("request: ",req);

    res.status(200).send("request sent successfully")
    
})

app.post("/signup", (req, res) => {

    console.log("request: ",req.body);

    res.status(200).send("signup request sent successfully")
    
})


app.put("/edit-user", (req, res) => {

    console.log("request: ",req.body);

    res.status(200).send("user updated successfully")
    
})

app.delete("/delete-user", (req, res) => {

    res.status(200).send("user delete successfully")
    
})

app.post("/signup", (req, res) => {

    console.log("request: ",req.body);

    res.status(200).send("signup request sent successfully")
    
})

app.listen(5500, () => {
console.log("server is listening on port 5500");
})