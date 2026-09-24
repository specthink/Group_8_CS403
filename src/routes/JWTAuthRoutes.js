const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/JWTAuthMiddleware")
const authController = require("../controllers/JWTAuthController");

/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: Register a new user account
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: user@example.com
 *                          password:
 *                              type: string
 *                              example: strongpassword123
 *      responses:
 *          201:
 *              description: User registered successfully!
 *          400:
 *              description: Email and password are required
 *          409:
 *              description: Email is already registered
 *          500:
 *              description: Internal server error
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Log in a user and issue HTTP-only cookies
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: user@example.com
 *                          password:
 *                              type: string
 *                              example: strongpassword123
 *      responses:
 *          200:
 *              description: Logged in successfully
 *          400:
 *              description: Email and password are required
 *          401:
 *              description: Invalid email or password
 *          500:
 *              description: Internal server error
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /auth/refresh:
 *  post:
 *      summary: Verify the refresh token cookie and issue a new access token cookie
 *      tags: [Authentication]
 *      responses:
 *          200:
 *              description: Token refreshed successfully
 *          401:
 *              description: Unauthorized Access - Token Missing
 *          403:
 *              description: Error - Refresh token expired or invalid
 */
router.post("/refresh", authenticateToken, authController.refresh);

/**
 * @swagger
 * /auth/logout:
 *  post:
 *      summary: Log out user and clear authentication cookies
 *      tags: [Authentication]
 *      responses:
 *          200:
 *              description: Logged out successfully
 */
router.post("/logout", authController.logout);

module.exports = router;