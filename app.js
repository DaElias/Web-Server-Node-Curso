require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
// app.set('view engine', 'hbs');
app.use(express.static("public"));


app.get("/", (req, res) => {
//   res.render('home');
    res.sendFile(__filename+'/public/index.html');

});

app.get("*", (req, res) => {
    //   res.render('home');
        res.sendFile(__filename+'/public/index.html');
    
    });

// app.get("/generic", (req, res) => {
//     res.sendFile(__filename+'/public/generic.html');
// });

// app.get("/elements", (req, res) => {
//     res.sendFile(__filename+'/public/elements.html');
// });

app.listen(port, () => console.log(`Running => http://localhost:${port}`));
