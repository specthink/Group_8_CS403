const express = require("express");
const cookieParser = require("cookie-parser");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require("./routes/JWTAuthRoutes");
const gameRoutes = require("./routes/gameRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/games", gameRoutes);

const swaggerOption = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Activity & Auth API',
            version: '1.0.0',
            description: 'API Documentation',
        },
    },
    apis: ['./src/routes/*.js'],
}
const swaggerSpec = swaggerJsdoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;