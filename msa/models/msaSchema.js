/*var mongoose = require("mongoose");


Set up the Schema functions




notificationBarSchema = mongoose.Schema({
  notificationUserNameOID: {type: String, required: true},
  notificationText: {type: String, required: true},
  notificationExpires: { type: Date, required: true },
  notificationCreatedDate: { type: Date, default: Date() }
}),

gameSchema = mongoose.Schema({
		gameTime: { type: Date, required: true },
		gameFieldOID: {type: String, required: true},
		gameTeamName1OID: {type: String, required: true},
		gameTeamName2OID: {type: String, required: true},
		gameStatus: {type: String, required: true}
    gameCreatedDate: { type: Date, default: Date() }
  }),

teamSchema= mongoose.Schema({
		teamName: {type: String, required: true},
		teamLeagueOID: {type: String, required: true},
		teamOwnerUserNameOID: {type: Array, required: false},
		teamMemberUserNameOID: {type: Array, required: false},
		teamCreatedDate: { type: Date, default: Date() }
  }),

subRequestSchema= mongoose.Schema({

    subRequestUserNameOID{type: String, required: true},
    subRequestTeamNameOID{type: String, required: true},
    subRequestGameOID{type: String, required: true},
    subRequestNumMen{type: Number, required: true},
    subRequestNumWomen{type: Number, required: true},
    subRequestCreatedDate:{ type: Date, default: Date() }
  });

convert each of the schemas into a model
using mongoose.model(modelName,schema)


var UserSchema = mongoose.model("UserSchema", userSchema);
module.exports = UserSchema;

*/
