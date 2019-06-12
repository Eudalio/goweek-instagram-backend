const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://eudalio:eudalio@cluster0-gga8g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(3333);