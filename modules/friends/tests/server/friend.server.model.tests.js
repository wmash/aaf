'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Friend = mongoose.model('Friend');

/**
 * Globals
 */
var user,
	friend;

/**
 * Unit tests
 */
describe('Friend Model Unit Tests:', function () {
	beforeEach(function (done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function () {
			friend = new Friend({
				user: user
			});
			done();
		});
	});

	describe('Method Save', function () {
		it('should be able to save without problems', function (done) {
			this.timeout(0);
			return friend.save(function (err) {
				should.not.exist(err);
				done();
			});
		});

		// TODO: Look into this
		// it('should be able to show an error when try to save without name', function (done) {
		// 	friend.name = '';
		//
		// 	return friend.save(function (err) {
		// 		should.exist(err);
		// 		done();
		// 	});
		// });
	});

	afterEach(function (done) {
		Friend.remove().exec(function () {
			User.remove().exec(function () {
				done();
			});
		});
	});
});
