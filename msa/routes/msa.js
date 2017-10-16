// msa_teams.js - MSA teams route module

var express = require("express");
var router = express.Router();
//"mongodb://localhost:27017/msa"
//Team Page Route

// Require the controller modules
//var msa_team_controller = require("../controllers/msaTeamController");
var msa_user_controller = require("../controllers/msaUserController");
/*
HTTP GET requests
1st arg = url;
2nd arg callback function

*/
/// msaTeam Routes

/* GET catalog home page. */
//router.get("/", msa_team_controller.index);
/* GET request for creating MsaTeam.
This must come before route for id (i.e. display author) */
//router.get("/msaTeam/create", msa_team_controller.msaTeam_create_get);

/* POST request for creating MsaTeam. */
//router.post("/msaTeam/create", msa_team_controller.msaTeam_create_post);

/* GET request to delete MsaTeam. */
//router.get("/msaTeam/:id/delete", msa_team_controller.msaTeam_delete_get);

// POST request to delete MsaTeam
//router.post("/msaTeam/:id/delete", msa_team_controller.msaTeam_delete_post);

/* GET request to update MsaTeam. */
//router.get("/msaTeam/:id/update", msa_team_controller.msaTeam_update_get);

// POST request to update MsaTeam
//router.post("/msaTeam/:id/update", msa_team_controller.msaTeam_update_post);

/* GET request for one MsaTeam. */
//router.get("/msaTeam/:id", msa_team_controller.msaTeam_detail);

/* GET request for list of all MsaTeams. */
//router.get("/msaTeams", msa_team_controller.msaTeam_list);
//export it

/// msaUsers Routes

/* GET catalog home page. */
router.get("/", msa_user_controller.index);
/* GET request for creating MsaTeam. This must come before route for id (i.e. display author) */
router.get("/msaUsers/create", msa_user_controller.msaUser_create_get);

/* POST request for creating MsaTeam. */
router.post("/msaUsers/create", msa_user_controller.msaUser_create_post);

/* GET request to delete MsaTeam. */
router.get("/msaUsers/:id/delete", msa_user_controller.msaUser_delete_get);

// POST request to delete MsaTeam
router.post("/msaUsers/:id/delete", msa_user_controller.msaUser_delete_post);

/* GET request to update MsaTeam. */
router.get("/msaUsers/:id/update", msa_user_controller.msaUser_update_get);

// POST request to update MsaTeam
router.post("/msaUsers/:id/update", msa_user_controller.msaUser_update_post);

/* GET request for one MsaTeam. */
router.get("/msaUsers/:id", msa_user_controller.msaUser_detail);

/* GET request for list of all MsaTeams. */
router.get("/msaUsers", msa_user_controller.msaUser_list);

//export that shit
module.exports = router;
