'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Activity Schema
 */
var ActivitySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Activity name',
		trim: true
	},
	comments: {
		type: Array
	},
	gpxData: {
		type: String,
		default: '',
		required: 'Please upload a GPX file'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	sharedWith: {
		type: Array
	},
	type: {
		type: String,
		default: '',
		required: 'Please select an activity type'
	},
	description: {
		type: String,
		default: 'N/A'
	}
});

mongoose.model('Activity', ActivitySchema);
