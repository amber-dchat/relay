const express = require("express");
const cors = require("cors")
const Gun = require("gun");

// WARNING: DO NOT OVERRIDE
const isDevelopment = (process.env.NODE_ENV || "development") === "development"
const allowedOrigin = isDevelopment ? "http://localhost:3000" : "https://amber-dchat.github.io"

const app = express();

app.use(cors({
    origin: allowedOrigin
}))

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.send("DChatApp: Talk to individuals without any central servers");
});

Gun({ web: app, radisk: true });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}\nCORS: Only allowing ${allowedOrigin}`));