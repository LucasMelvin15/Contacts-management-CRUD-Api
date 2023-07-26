const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
require("dotenv").config();
connectDb();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
