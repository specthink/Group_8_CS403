const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");
const authenticateToken = require("../middleware/JWTAuthMiddleware")

router.use(authenticateToken);
/**
 * @swagger
 * /games:
 *   post:
 *     summary: Create a new game record (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - genre
 *               - platform
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Valorant"
 *               genre:
 *                 type: string
 *                 example: "FPS"
 *               platform:
 *                 type: string
 *                 example: "PC"
 *     responses:
 *       201:
 *         description: Game created successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 title:
 *                   type: string
 *                   example: "Valorant"
 *                 genre:
 *                   type: string
 *                   example: "FPS"
 *                 platform:
 *                   type: string
 *                   example: "PC"
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       500:
 *         description: Internal server error
 */
router.post("/", gameController.createGame);

/**
 * @swagger
 * /games:
 *   get:
 *     summary: Get a list of all games (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved list of games
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 3
 *                   title:
 *                     type: string
 *                     example: "Valorant"
 *                   genre:
 *                     type: string
 *                     example: "FPS"
 *                   platform:
 *                     type: string
 *                     example: "PC"
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       500:
 *         description: Internal server error
 */
router.get("/", gameController.getAllGames);

/**
 * @swagger
 * /games/{id}:
 *   get:
 *     summary: Get a specific game by its ID (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric ID of the game
 *         example: 3
 *     responses:
 *       200:
 *         description: Game details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 title:
 *                   type: string
 *                   example: "Valorant"
 *                 genre:
 *                   type: string
 *                   example: "FPS"
 *                 platform:
 *                   type: string
 *                   example: "PC"
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       404:
 *         description: Game not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", gameController.getGameById);

/**
 * @swagger
 * /games/{id}:
 *   put:
 *     summary: Replace an entire game record by ID (Full Update) (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric ID of the game
 *         example: 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - genre
 *               - platform
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Valorant"
 *               genre:
 *                 type: string
 *                 example: "FPS"
 *               platform:
 *                 type: string
 *                 example: "PC"
 *     responses:
 *       200:
 *         description: Game completely replaced successfully
 *       400:
 *         description: Missing fields required for full replacement
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       404:
 *         description: Game not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", gameController.replaceGame);

/**
 * @swagger
 * /games/{id}:
 *   patch:
 *     summary: Update specific fields of a game record by ID (Partial Update) (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric ID of the game
 *         example: 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Valorant Updated"
 *               genre:
 *                 type: string
 *                 example: "Tactical Shooter"
 *               platform:
 *                 type: string
 *                 example: "PC"
 *     responses:
 *       200:
 *         description: Game updated successfully
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       404:
 *         description: Game not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", gameController.updateGame);

/**
 * @swagger
 * /games/{id}:
 *   delete:
 *     summary: Delete a game record by ID (Protected)
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric ID of the game
 *         example: 3
 *     responses:
 *       200:
 *         description: Game deleted successfully
 *       401:
 *         description: Unauthorized Access - Token Missing or Invalid
 *       404:
 *         description: Game not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", gameController.deleteGame);

module.exports = router;