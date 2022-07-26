const mongoose= require('mongoose');
const db= mongoose.connection;

mongoose.connect('mongodb+srv://aninda:aninda123@cluster0.axsk7.mongodb.net/?retryWrites=true&w=majority');

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;