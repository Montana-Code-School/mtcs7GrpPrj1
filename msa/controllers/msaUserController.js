/*
set the variable to MsaUser and set the path to the msaUser model
THis is the model we use to update the data

*/

// import the models
var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam"); //added when updating the controller to work with pug templates

// import async
var async = require("async"); //added when updating the controller to work with pug templates

/////////Various functions to return counts of things/////////

/*
async.parallel() method is passed to an obj
w/ functions to get various counts
all are started at the same time
the finall callback
will be the counts in the results parameter -
if no error is thrown
*/

exports.index = function(req, res) {
  async.parallel(
    {
      // returns the count for users in the DB
      msaUser_count: function(callback) {
        MsaUser.count(callback);
      }, // MsaUser --> constructor function -->
      //comes from the schema model

      //  next 3 return the count for the user privs
      //(attempting to return an array of objs...)

      msaUser_MsaAdminPriv_count: function(callback) {
        MsaUser.count({ user_privilege: "MsaAdminPriv" }, callback);
      },

      msaUser_MsaPublisherPriv_count: function(callback) {
        MsaUser.count({ user_privilege: "MsaPublisherPriv" }, callback);
      },

      msaUser_MsaUserPriv_count: function(callback) {
        MsaUser.count({ user_privilege: "MsaUserPriv" }, callback);
      }
      /*
res.render() specifies the view/template named
index and an obj containing the model counts.
data is k-v pairs and is accessed in the template using the key.
the key is the name of the functions...maybe
*/
    },
    function(err, results) {
      res.render("index", { title: "MSA Home", error: err, data: results });
    }
  );
};

//each of the functions export to the URLs we need to handlercreate, update, and delete ops use forms
//and also have additional methods for handling for post requests

exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
// Display a list of all msaUsers

exports.msaUser_list = function(req, res) {
  res.send("Not Implemented: msaUser List");
};

//Display User detail page for individual team
exports.msaUser_detail = function(req, res) {
  res.send("Not Implemented: msaUser Detail: " + req.params.id);
};

// Display User create form on GET
exports.msaUser_create_get = function(req, res) {
  res.send("Not Implemented: msaUser create GET");
};

// Handle msaUser create on POST
exports.msaUser_create_post = function(req, res) {
  res.send("Not Implemented: msaUser create POST");
};

// Display msaUser delete form on GET
exports.msaUser_delete_get = function(req, res) {
  res.send("Not Implemented: msaUser delete GET");
};

// Handle msaUser delete on POST
exports.msaUser_delete_post = function(req, res) {
  res.send("Not Implemented: msaUser delete POST");
};

// Display msaUser update form on GET
exports.msaUser_update_get = function(req, res) {
  res.send("Not Implemented: msaUser update GET");
};

// Handle msaUser update on POST
exports.msaUser_update_post = function(req, res) {
  res.send("Not Implemented: msaUser update POST");
};
