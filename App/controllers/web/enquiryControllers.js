const enquiryModel = require("../../models/enquiryModel");

// INSERT ENQUIRY
let enquiryInsert = async (req, res) => {
  try {
    let { name, email, phone, message } = req.body;

    let enquiry = new enquiryModel({
      name,
      email,
      phone,
      message,
    });

    await enquiry.save();

    res.status(200).send({
      status: 1,
      message: "Enquiry is saved successfully",
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "There is an error saving enquiry",
      error: err.message,
    });
  }
};

// GET ALL ENQUIRIES
let enquiryList = async (req, res) => {
  try {
    let enquiry = await enquiryModel.find();

    res.status(200).send({
      status: 1,
      enquiryList: enquiry,
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "Error fetching enquiries",
      error: err.message,
    });
  }
};

// DELETE ENQUIRY
let enquiryDelete = async (req, res) => {
  try {
    let enId = req.params.id;

    await enquiryModel.deleteOne({ _id: enId });

    res.status(200).send({
      status: 1,
      message: "Enquiry deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "Error deleting enquiry",
      error: err.message,
    });
  }
};

// GET SINGLE ENQUIRY
let enquirysingleRow = async (req, res) => {
  try {
    let enId = req.params.id;

    let enquiry = await enquiryModel.findOne({ _id: enId });

    res.status(200).send({
      status: 1,
      enquiry,
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "Error fetching enquiry",
      error: err.message,
    });
  }
};

module.exports = {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirysingleRow,
};
