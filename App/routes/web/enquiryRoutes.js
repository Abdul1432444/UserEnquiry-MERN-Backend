let express = require("express");
const {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirysingleRow,
} = require("../../controllers/web/enquiryControllers");

let enquiryRouter = express.Router();
// for insertion
enquiryRouter.post("/insert", enquiryInsert);
// for enquiry list
enquiryRouter.get("/view", enquiryList);
// for deleting enquiry
enquiryRouter.delete("/delete/:id", enquiryDelete);
// for editing the enquiry
enquiryRouter.get("/single/:id", enquirysingleRow);

module.exports = enquiryRouter;
