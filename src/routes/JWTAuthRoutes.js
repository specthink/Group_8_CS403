const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/JWTAuthMiddleware")
const authController = require("../controllers/JWTAuthController");

router.use(authenticateToken);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);

module.exports = router;