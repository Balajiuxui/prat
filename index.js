console.log("hi krishna");

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello World</h1>
        <form action="/about" method="post">
            <label for="balaji">Balaji</label>
            <input type="text" name="balaji" required placeholder="Hello World">
            <button type="submit">Submit</button>
        </form>

        <form action="/submit" method="post">
        <button type="submit">hello</button>
        </form>
    `);
});

app.post("/about", (req, res) => {
    const name = req.body.balaji; // ✅ Get input before sending a response
    console.log("Received Name:", name); // ✅ Log first
    const names=["aswini", "deepa", "aswinideepa"]
    if(names.includes(name)){
        res.send(`${name}love you.`); // ✅ Now send the response
    }
    else
    {
        res.send(`love you 3000 times`)
    }
});

app.post("/submit",(req,res)=>
{
    res.sendFile(__dirname + "/public/index.html")
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
