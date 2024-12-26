const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data (this is where the bug might occur)
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).send('No data received');
  }
  // Simulate an asynchronous operation
  setTimeout(() => {
    try {
      // Some operations which can potentially fail
      const result = JSON.parse(JSON.stringify(data));
      res.json(result);
    } catch (error) {
      console.error('Error processing data:', error);
      // Do not return error. This will cause the bug.
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));