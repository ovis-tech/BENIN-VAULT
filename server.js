require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cookiesParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const verifyJWT = require("./middleware/verifyjwt");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

//connect to MongoDB
connectDB();

//custom middleware logger
app.use(logger);

//handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);

//cross origin resource sharing
app.use(cors(corsOptions));
//built-in middle ware to handle urlencoded data in other words form data
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookiesParser());

//serve static files
app.use(express.static(path.join(__dirname, "public")));


//routes

app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/api/auth.js"));
app.use("/refresh", require("./routes/api/refresh.js"));
app.use("/logout", require("./routes/api/logOut.js"));
app.use("/api/artifact-chat", require("./routes/api/artifactChat.js"));


app.use(verifyJWT);
app.use("/employees", require("./routes/api/employees.js"));
app.use("/users", require("./routes/api/users.js"));

app.all("/{*splat}", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "subdir", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});