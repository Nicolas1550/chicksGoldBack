import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import waterJugRoutes from './routes/waterJugRoutes';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Water Jug API',
            version: '1.0.0',
            description: 'API para resolver el problema de los jarrones de agua',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.json());

// Integración de Swagger con Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar rutas
app.use('/api', waterJugRoutes);

export default app;
