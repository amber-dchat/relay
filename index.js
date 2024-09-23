const express = require("express");
const Gun = require("gun");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.send("DChatApp: Talk to individuals without any central servers");
});

Gun({ web: app, radisk: true });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));