const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDef');

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
