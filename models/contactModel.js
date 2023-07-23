const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add name"],
    },
    email: {
      type: String,
      required: [true, "please add email"],
    },
    phone: {
      type: String,
      required: [true, "please add number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contacts", contactSchema); // you can call it anything depending on your schema ie contacts.  contacts here is the model and It will be using the schema contactschema
//Each Schema maps up to a collection in mongodb and defines the shape of the document withn that collection
// a document - a simple data record
// a collection - a set of documents
// Each schema has properties  and their types
//
