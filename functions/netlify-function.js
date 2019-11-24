const fetch = require('node-fetch');

const API_URL = process.env.API_URL;

exports.handler = async (event, context) => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
