express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

// body parser (built-in)
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
    origin: "https://pioneerbiotank.com"
}));

// logger
app.use(morgan("dev"));

// health check
app.get("/", (req, res) => {
    res.status(200).send("API is working");
});

// mail API
app.post("/send_mail", async (req, res) => {
    try {
        const { subject, text } = req.body;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // MUST be false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject,
            text,
        });

        res.status(200).json({
            status: "success",
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error("Mail error:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to send email"
        });
    }
});

// ⚠️ cPanel: DO NOT hardcode port
app.listen(process.env.PORT, () => {
    console.log("App started");
});

module.exports = app;
