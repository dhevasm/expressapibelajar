const express = require('express');
const siswasRouter = require('./routes/siswas');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
})

app.get('/', (req, res) => {
    res.json({message : "Welcome to the application"});
})
app.use('/api/siswas', siswasRouter);


// conncet db
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.port, () => {
        console.log(`DB Was Connected & Server is running on port ${process.env.port}`);
    });
}).catch((error) => {
    console.log(error);
})

module.exports = app;