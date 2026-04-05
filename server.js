let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let cors = require("cors");

let app = express();

// ✅ CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://user-enquiry-mern-ui.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());

// routes
app.use("/api/website/enquiry", enquiryRouter);

// test route
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// DB
mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ for Vercel
module.exports = app;
