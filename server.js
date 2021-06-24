const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const Enums = Object.freeze({
  Port: 5000,
  Errors:{
    NotFound: 'Not Found'
  },
  BackendApiBaseUrl: 'https://rest.bandsintown.com/artists',
  appId: 'abc',
});

app.use(cors());
app.use(express.static('./dist/artists'));

app.listen(process.env.PORT || 5000)

app.get('/artists/:artistName', async (req, res) => {
  try {
    const result = await axios.get(`${Enums.BackendApiBaseUrl}/${req.params.artistName}?app_id=${Enums.appId}`);
    if(!result.data || result.data.error) {
      return res.status(404).json({
        message: Enums.Errors.NotFound, 
        code: 404
      });
    }
    
    res.json(result.data);
  } catch (error) {
    errorHandler(error, res);
  }
});

app.get('/artists/:artistName/events', async (req, res) => {
    try {
      const result = await axios.get(`${Enums.BackendApiBaseUrl}/${req.params.artistName}/events?app_id=${Enums.appId}`)
      res.json(result.data);
    } catch (error) {
      errorHandler(error, res);
    }
});

app.get('/*', function(req, res, next) {
  res.sendFile('/index.html', {root: 'dist/artists/'}
);
});

function errorHandler(error, res) {
  const err = {
    message: error.response.data.Message,
    code: error.response.code
  };
  res.status(400).json(err);
}
