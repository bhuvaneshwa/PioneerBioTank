const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

//body parser
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());

//morgan
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
    res.status(200).send("Hello")
})

app.post("/send_mail", async (req, res) => {
    const { to, subject, text, html } = req.body;

    console.log("Received data:", { to, subject, text });

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sunilprakash96@gmail.com',
            pass: 'vjnl xpxz qqtp ynim',
        },
    });
    let email = transporter.sendMail({
        from: 'sunilprakash96@gmail.com',
        to: 'sunilprakash96@gmail.com',
        subject: subject,
        text: text
    });
    const responseEmail = await email
    res.status(200).send({ message: "Email is received", email: email, status: "success" });
});

app.listen(PORT, () => {
    console.log("app listening on port " + PORT);
});

module.exports = app