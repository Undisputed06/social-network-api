const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes'));

//tells mongoose what db to connect to 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-netowrk-api', {

 //set of config options Mongoose ask for information about
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));