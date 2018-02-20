var path = require('path');
var router = require("express").Router();
var apiRoutes = require("./api/users.js");

// Api routes
router.use("/api", apiroutes);

router.use((req, res) =>
	res.sendFile(path.join(_dirname, "../client/build/index.html"))
);

module.exports = router
