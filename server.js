let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let cors = require("cors");

let app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://user-enquiry-mern-ui.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// routes
app.use("/api/website/enquiry", enquiryRouter);

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("Server Is Running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Database Error:", err);
  });
