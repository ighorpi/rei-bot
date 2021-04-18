const mongoose = require('mongoose');
require('dotenv').config()
mongoose
.connect(process.env.MONGODB_CS, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('db connected'))
    .catch(() => console.log('IP address warning supressor'))

const normalizedPath = require("path").join(__dirname,'../models');
require('fs').readdirSync(normalizedPath).forEach((file) => {
    require('../models/'+file.replace('.js', ''));
})