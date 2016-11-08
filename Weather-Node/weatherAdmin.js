

var User = require('./weather-search.js');

var AdminView = function(Username, Location){
	this.Users = [];
	this.NumberofStudents = 0;
	this.Username = Username;
	this.Location = Location;
	this.addUser = function(g, n, r){
		this.Users.push(new User(g, n, r));
		this.NumberofUsers = this.Users.length;
	}
}

module.exports = AdminView;