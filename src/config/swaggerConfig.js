const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Activity & Auth API",
      version: "1.0.0",
      description: "API Documentation for user authentication and protected video game collections.",
    },
    servers: [
      {
        url: "http://localhost:3000", 
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken", 
          description: "Log into your account via /auth/login first to authorize your game CRUD endpoints.",
        },
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT token directly to authorize this route."
        }
      },
    },
  },
  apis: ["./src/routes/*.js"],
};
const swaggerSpecs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpecs;