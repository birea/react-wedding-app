const assert = require('assert');
const request = require('supertest');
const app = require('../../app');


/* 
	Arrow Functions with Mocha Discouraged!

	Arrow functions () => { } lexically bind 'this' and cannot
	access the Mocha context.

	I.e., the first test fails (with the use of 'this') when 
	the describe function is changed to an arrow function.
*/

describe('Guests controller', function() {

	it('should take less than 2000ms', (done) => {
		this.timeout(2000);
  		setTimeout(done, 1000);
	});

	it('POST to /api/guests creates a new guest', (done) => {
		request(app)
			.post('/api/guests')
			.send({
				name: 'Joyce Stowers',
				email: 'test@test.com'
			})
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	it('GET to /api/guests returns all the guests', (done) => {
		request(app)
			.get('/api/guests')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});
});