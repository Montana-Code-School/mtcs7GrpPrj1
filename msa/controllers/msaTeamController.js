/*
set the variable to MsaTeam and set the path to the msaTeam model
THis is the model we use to update the data

*/
// import the models
var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");

/*
each of the functions export to the URLs we need to handlercreate, update, and delete ops use forms
and also have additional methods for handling for post requests
*/
var async = require("async"); //added when updating the controller to work with pug templates

///////Various functions to return the counts of things
/*
async.parallel() method is passed to an obj
w/ functions to get various counts
all are started at the same time
the finall callback
will be the counts in the results parameter -
if no error is thrown
*/

/*

exports.index = function(req, res) {
  async.parallel({
    // returns count for the teams
    msaTeam_count: function(callback) {
      MsaTeam.count(callback);
    },
    //next 4 return the count as an array of objects
    // for the number of teams by league
    msaTeam_Mens_count: function(callback) {
      MsaTeam.count({ team_league_OID: "Mens" }, callback);
    },
    msaTeam_Womens_count: function(callback) {
      MsaTeam.count({ team_league_OID: "Womens" }, callback);
    },
    msaTeam_CoRec_count: function(callback) {
      MsaTeam.count({ team_league_OID: "Womens" }, callback);
    },

    msaTeam_Unassigned_count: function(callback) {
      MsaTeam.count({ team_league_OID: "Unassigned" }, callback);
    },

    // return the count in an array of ids
    // for the number of team members
    // because the constructor function MsaTeam
    //will return an array - length is used
    //instead of count
    msaTeam_member_count: function(callback) {
      MsaTeam.team_member_user_name_OID.length(callback);
    },






//The following code was firest created as dummy controls
//then we added async code (above)
// route to the homepage -index
exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
// Display a list of all Teams
exports.msaTeam_list = function(req, res) {
  res.send("Not Implemented: msaTeam List");
};

//Display Team detail page for individual team
exports.msaTeam_detail = function(req, res) {
  res.send("Not Implemented: msaTeam Detail: " + req.params.id);
};

// Display Team create form on GET
exports.msaTeam_create_get = function(req, res) {
  res.send("Not Implemented: msaTeam create GET");
};

// Handle msaTeam create on POST
exports.msaTeam_create_post = function(req, res) {
  res.send("Not Implemented: msaTeam create POST");
};

// Display msaTeam delete form on GET
exports.msaTeam_delete_get = function(req, res) {
  res.send("Not Implemented: msaTeam delete GET");
};

// Handle msaTeam delete on POST
exports.msaTeam_delete_post = function(req, res) {
  res.send("Not Implemented: msaTeam delete POST");
};

// Display msaTeam update form on GET
exports.msaTeam_update_get = function(req, res) {
  res.send("Not Implemented: msaTeam update GET");
};

// Handle msaTeam update on POST
exports.msaTeam_update_post = function(req, res) {
  res.send("Not Implemented: msaTeam update POST");
};
*/
