require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
PORT = process.env.PORT;
mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
})
.catch((err) => {
    console.log(err)
})

const studentRoute = require("./Routes/Student");
app.use("/students", studentRoute);
