var inquirer = require('inquirer');

var MadLibs = function(noun, adjective, verb){
	this.noun = noun;
	this.adjective = adjective;
	this.verb = verb;
	this.storyArray = [];



MadLibs.prototype.printInfo = function() {
    console.log(" " + this.noun + "\n " + this.adjective + "\n " + this.verb);
}

var nouns = [];
var adjectives = [];
var verbs = [] ;
var count = 0;

var askQuestion = function() {
        if (count < 3) {
            console.log("\nNEW WORD!\n");
            inquirer.prompt([{
                name: "noun",
                message: "Give me a noun?"
            }, {
                name: "adjective",
                message: "Give me an adjective?"
            }, {
            	name: "verb",
                message: "Give me a verb?"
            }, {

	}]).then(function(answers) {
            var newstory = new Madlibs(answers.noun, answers.adjective, answers.verb);
            newStory.printInfo();
            //ADD ONE TO COUNT TO INCREMENT OUR RECURSIVE LOOP BY ONE
            count++;

            askQuestion();
        })
  

