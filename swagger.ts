const swaggerAutogen = require('swagger-autogen')();

const docs = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./src/routes/air-quality.router.ts'];

swaggerAutogen(outputFile, endpointsFiles, docs);