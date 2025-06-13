const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Use environment variable for database password
const DB_PASSWORD = process.env.DB_PASSWORD;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello secure world!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
