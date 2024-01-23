const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Route to fetch data from the Python Microservice
app.get('/api/python-microservice-message', async (req, res) => {
  try {
    const response = await axios.get('http://python-microservice:3002/microservice-message');
    res.json({ message: response.data.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from the Java Microservice
app.get('/api/java-microservice-message', async (req, res) => {
  try {
    const response = await axios.get('http://java-microservice:8080/');
    res.json({ message: response.data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from the Ruby Microservice
app.get('/api/ruby-microservice-message', async (req, res) => {
  try {
    const response = await axios.get('http://ruby-microservice:3003/ruby-microservice-message');
    res.json({ message: response.data.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
