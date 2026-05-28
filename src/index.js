import dotenv from 'dotenv';
import express from 'express';
import cors from 'express-cors';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Vibe Hub API is running' });
});

// API Routes (to be implemented)
app.get('/api/v1', (req, res) => {
  res.json({ 
    message: 'Vibe Hub API v1', 
    version: '1.0.0',
    endpoints: {
      auth: '/api/v1/auth',
      users: '/api/v1/users',
      posts: '/api/v1/posts',
      comments: '/api/v1/comments',
      likes: '/api/v1/likes',
      follows: '/api/v1/follows'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎵 Vibe Hub API running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

export default app;
