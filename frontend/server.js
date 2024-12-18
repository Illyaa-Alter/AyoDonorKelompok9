import express from 'express';
import cors from 'cors';

const app = express();

// Gunakan CORS dengan opsi tertentu
app.use(cors({
  origin: 'http://localhost:5173',  // Mengizinkan request dari frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Mengizinkan metode tertentu
  allowedHeaders: ['Content-Type', 'Authorization'],  // Mengizinkan header tertentu
  credentials: true  // Mengizinkan cookie jika dibutuhkan
}));

// Definisikan endpoint API
app.get('/project', (req, res) => {
  res.json({ message: 'Project fetched successfully' });
});

// Jalankan server
app.listen(8000, () => {
  console.log('Server berjalan di http://127.0.0.1:8000');
});
