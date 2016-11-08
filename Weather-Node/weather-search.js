var weather = require('weather-js');
//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');

var UserSearch = function(UserName, Location, Date){
	this.UserName = UserName;
	this.Location = Location;
	this.Date = Date.now();

this.getWeather = function(location){

	weather.find({search: this.location, degreeType: "F"}, function(err, result){

	// If there is an error log it.
	if(err) {
		console.log(err);
	}

		console.log(JSON.stringify(result, null, 2));

		});
	}	
};

module.exports = UserSearch;

var askQuestion = function() {
    
        inquirer.prompt([{
            name: "name",
            message: "What is your name?"
        }, {
            name: "location",
            message: "Where do you want weather information?"
  
        }])
            
            //RUN THE askQuestion FUNCTION AGAIN SO AS TO EITHER END THE LOOP OR ASK THE QUESTIONS AGAIN
            askQuestion();
        
    //ELSE STATEMENT WHICH PRINTS "All questions asked" TO THE CONSOLE WHEN THE CODE HAS BEEN RUN FIVE TIMES
    } else {
        console.log("All questions asked");
    }
}



//CALL askQuestion TO RUN OUR CODE
askQuestion();

