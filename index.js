let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let cors = require("cors");

let app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://user-enquiry-mern-ui.vercel.app/", // for now (later restrict to your frontend domain)
  }),
);
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
