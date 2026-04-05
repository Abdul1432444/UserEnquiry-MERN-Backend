let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let cors = require("cors");

let app = express();

// ✅ CORS FIX
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://user-enquiry-mern-ui.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// ✅ Handle preflight
app.options("*", cors());

app.use(express.json());

// routes
app.use("/api/website/enquiry", enquiryRouter);

// DB connection
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Database Error:", err);
  });

// ✅ IMPORTANT for Vercel
module.exports = app;
