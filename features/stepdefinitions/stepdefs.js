const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const exp = require("constants");


// Feature 1
Given("I am {string}", function(expectedAnswer){
  if(expectedAnswer == "the owner"){
    this.userType = "owner";
  }else{
    this.userType = "not the app owner";
  }
});

When("I want to check for which songs were played", function(){
  if(this.userType == "owner"){
    this.actualAnswer = "can";
  }else{
    this.actualAnswer = "can't";
  }
});

Then("I {} get a list of songs", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 2
Given("I am the {string}", function(expectedAnswer){
  if(expectedAnswer == "owner"){
    this.userType = "owner";
  }
});

When("I want to see which songs are played", function(){
  if(this.userType == "owner"){
    this.actualAnswer = "csv";
  }
});

Then("I can get a {} file from the server", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
