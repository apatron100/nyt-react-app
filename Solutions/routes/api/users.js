var router = require('express'),Router()
var userController = require('../../controllers/userController')


router.route("/users")
.get(usersController.findAll)
.post(usersController.create)
