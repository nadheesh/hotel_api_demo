import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import hotelRoutes from './routes/hotelRoutes';

const app = express();
const PORT = process.env.PORT || 9090;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', hotelRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    timestamp: new Date().toISOString(),
    status: 500,
    reason: 'Internal Server Error',
    message: 'Something went wrong!',
    path: req.path,
    method: req.method
  });
});

// 404 handler
app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({
    timestamp: new Date().toISOString(),
    status: 404,
    reason: 'Not Found',
    message: `Route ${req.originalUrl} not found`,
    path: req.path,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`🏨 Hotel API Server is running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/healthcheck`);
  console.log(`🔍 Search hotels: http://localhost:${PORT}/hotels/search`);
});

export default app;
