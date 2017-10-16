var express = require("express");
var router = express.Router();

/* GET home page.
replaced the original code
res.render("index", { title: "Express" }
with res.redirect() method.  this redirects
to the specified page, by default
sending HTTP 302 FOun.
You can change the status code returned if necessary
and supply absolute or relative paths 
*/
router.get("/", function(req, res) {
  res.redirect("/msa");
});

module.exports = router;
