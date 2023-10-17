const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:8081/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}  

const url = 'https://jsonplaceholder.typicode.com/posts';

app.get('/', (req, res) => {
    res.send('Main Page for 1800 React, Redux-Saga, Node Express App');
})

app.get('/posts', async (req, res) => {
    const response = await fetch(url);
      
      const data = await response.json();
      return res.json(data);      
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})