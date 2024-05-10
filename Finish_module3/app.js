const express = require('express');
const app = express();
const userRouter = require('./src/routers/user.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", userRouter);

app.listen(PORT, () =>{
    console.log(`server đang lắng nghe:http://localhost:${PORT}`);
})