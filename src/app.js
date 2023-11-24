const express = require('express');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const createSwaggerDefinition = require('./swagger/swaggerDef');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const swaggerDefinition = createSwaggerDefinition();

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:4000/api-docs/#/`);
});
