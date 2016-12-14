var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EventSchema = new Schema({
	startTime: 		Date,
	endTime: 		Date,
	createdby:  	String,
	type: 			String,
	description: 	String
});

module.exports = mongoose.model('Event', EventSchema);