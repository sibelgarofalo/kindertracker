/** auto-swagger */
const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger-output.json";
const endpointFiles = ["./app.js"];
const swaggerConfig = {
  info: {
    title: 'Kinder Tracker API 1.0',
    description: 'Kinder Tracker Open API Documentation'
  },
  host: 'localhost:4000',
  scheme: ['http']
};

// generate
swaggerAutogen(outputFile, endpointFiles, swaggerConfig);
