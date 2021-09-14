const path = require("path")
const express = require("express");
const app = express();
const port = 3000;
const config = require('./config/config.js');
const axios = require('axios');
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.use(express.static(path.join(__dirname, "/client/dist")));


//Axios Requests, format right side URL within client-side request as req.url
const axiosConfig = {
  headers: {
    'content-type': 'application/json',
    'authorization': config.API_KEY
  }
};

app.get('/*', (req, res) => {
  axios.get(`${API_URL}${req.url}`, axiosConfig)
  .then((response) => {
    console.log('GET Success');
    res.send(response.data);
  })
  .catch((error) => {
    res.send(`Error making GET request: ${error}`);
  })
});

app.post('/*', (req, res) => {
  axios.post(`${API_URL}${req.url}`, axiosConfig)
  .then((response) => {
    console.log('POST Success');
    res.send(response.status);
  })
  .catch((error) => {
    res.send(`Error making POST request: ${error}`);
  });
});

app.put('/*', (req, res) => {
  axios.put(`${API_URL}${req.url}`, axiosConfig)
  .then((response) => {
    console.log('PUT Success');
    res.send(response.status);
  })
  .catch((error) => {
    res.send(`Error making PUT request: ${error}`);
  });
});

//Start Listen
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});