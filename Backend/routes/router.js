const express = require("express")
const router = express.Router()

const RegisterController = require("../controller/registerController")
const LoginController = require("../controller/loginController")
const BannerController = require("../controller/bannerController")

//fetch the user details
router.get("/getUser",RegisterController.getUser)

//register the admin
router.post("/register",LoginController.register)
//login
router.post("/login",LoginController.login)


//banner
router.post("/createBanner",BannerController.createBanner)

router.get("/getAllBanners",BannerController.getAllBanners)

router.put("/editBanner/:id",BannerController.editBanner)

module.exports = router