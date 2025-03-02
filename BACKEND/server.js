const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/user");
const path = require('path'); // Keep this first declaration

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
});

//shadow teacher
const shadowteacherbookingRouter = require("./routes/shadowteacherbooking.js");
app.use("/shadow-teacher", shadowteacherbookingRouter);

//Special needs teacher for Home
const specialneedteacherbookingRouter = require("./routes/specialneedteacherbooking.js");
app.use("/special-need-teacher", specialneedteacherbookingRouter);

//School readiness program
const readinessteacherbookingRouter = require("./routes/readinessteacherbooking.js");
app.use("/readiness-teacher", readinessteacherbookingRouter);

//Student counseling
const counsellingteacherbookingRouter = require("./routes/counsellingteacherbooking.js");
app.use("/counselling-teacher", counsellingteacherbookingRouter);

//Speech and Behavior occupational Therapy sessions
const therapysessionteacherbookingRouter = require("./routes/therapysessionteacherbooking.js");
app.use("/therapy-session-teacher", therapysessionteacherbookingRouter);

const categoryRouter = require("./routes/ServiceCategories.js");
app.use("/category", categoryRouter);

const contactRouter = require("./routes/contact.js");
app.use("/contact", contactRouter);

const courseRouter = require("./routes/course.js");
app.use("/course", courseRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
