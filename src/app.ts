import express from 'express';
import { AppDataSource } from './database';
import userRoutes from './routes/UserRoutes';
import accountRoutes from './routes/AccountRoutes';
import categoryRoutes from './routes/categoryRoutes';
import transactionRoutes from './routes/transactionRoutes';
import budgetRoutes from './routes/budgetRoutes';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4060;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route to return a JSON message
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Budgeting App API!' });
});

app.use('/api/auth', userRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}🛠️`);

  // Initialize database connection
  try {
    await AppDataSource.initialize();
    console.log('Budget_db connected successfully🚴🏽‍♂️');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});
