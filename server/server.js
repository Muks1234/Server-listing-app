const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const ServerPortRouter = require('./routes/ServerPortRouter');

mongoose.connect("mongodb+srv://mollelwa:solomon600@cluster0-f9l3z.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})
.then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/serverport', ServerPortRouter);


  
app.listen(PORT, function(){
    console.log('Server is running on Port: ', PORT)
});
