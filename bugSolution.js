const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).send('No data received');
  }
  setTimeout(() => {
    try {
      const result = JSON.parse(JSON.stringify(data));
      res.json(result);
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(400).json({ error: 'Invalid JSON data' });
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));