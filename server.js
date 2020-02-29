const express = require("express");
/*
const port = process.env.PORT || 8080;
const app = express();

app.enable("trust proxy");

app.use(function(req, res, next) {
    console.log("inside app use");

    if (req.protocol !== "https") {
        console.log("inside conditional");
        var secureUrl = "https://" + req.headers["host"] + req.url;
        res.writeHead(301, { Location: secureUrl });
        res.end();
    }
    next();
});

app.use(express.static(__dirname + "/dist/"));
app.get(/.*!/, function(req, res) {
    console.log("inside get");
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("server started");*/

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else
            next()
    })
}
