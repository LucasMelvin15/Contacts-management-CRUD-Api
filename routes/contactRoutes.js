const express = require("express");
const router = express.Router();
const contactConroller = require("../controllers/contactController");

router
  .route("/")
  .get(contactConroller.getContact)
  .post(contactConroller.postContact);

router
  .route("/:id")
  .get(contactConroller.getContactById)
  .put(contactConroller.updateContact)
  .delete(contactConroller.deleteContact);

module.exports = router;
