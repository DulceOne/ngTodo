const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/toDoA2", { useNewUrlParser: true }).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
}) 
module.exports = mongoose.connection;