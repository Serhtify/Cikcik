const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/doviz', async (req, res) => {

  const dolarResponse = await axios.get(`https://api.exchangerate-api.com/v4/latest/usd`)

const dolar = dolarResponse.data.rates.TRY;

  const euroResponse = await axios.get(`https://api.exchangerate-api.com/v4/latest/eur`)

const euro = euroResponse.data.rates.TRY;

  res.json({
dolar: dolar,
euro: euro
    
});
});
  app.listen(port, () => {
console.log(`Sunucu Çalışıyor: https://localhost:${port}`)
});