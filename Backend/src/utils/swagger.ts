import swaggerJSDoc from "swagger-jsdoc";
import { schemaObject } from "./swaggerSchemas/index";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Name Processing API",
      version: "1.0.0",
    },
    components: {
      schemas: schemaObject,
    },
  },
  apis: ["./src/routes/*.ts"], // Path to your route files
};

const specs = swaggerJSDoc(options);

export default specs;

