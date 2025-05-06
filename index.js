const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const piaRoutes = require('./routes/pia-routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', piaRoutes); // <-- Isso habilita /api/register e /api/token

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
  console.log('Swagger em http://localhost:3000/api-docs');
});
