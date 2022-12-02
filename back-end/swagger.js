/** auto-swagger */
const swaggerAutogen = require("swagger-autogen")({openapi: '3.0.0'});
const outputFile = "./swagger-output.json";
const endpointFiles = ["./app.js"];
const swaggerConfig = {
  info: {
    title: 'Kinder Tracker API 1.0',
    description: 'Kinder Tracker Open API Documentation'
  },
  servers: [
    {
      url: "http://localhost:4000/",
      description: "Local development"
    },
    {
      url: "https://kindertracker-api.azurewebsites.net/",
      description: "Azure deployment"
    }
  ],
};

// generate
swaggerAutogen(outputFile, endpointFiles, swaggerConfig);
