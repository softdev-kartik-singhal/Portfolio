const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint for Render
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Service is healthy',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.head('/api/health', (req, res) => {
  res.status(200).end();
});

// Serve static assets from project root
app.use(express.static(path.join(__dirname)));

// Route all page requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
