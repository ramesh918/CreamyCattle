import app from './src/app';
import specs from './src/utils/swagger';
import swaggerUi from 'swagger-ui-express';
import connectToDatabase from './src/db';
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


connectToDatabase(
  () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  },
  (error) => {
    console.error('Application failed to start:', error);
  }
);


