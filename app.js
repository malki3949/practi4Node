//  const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/items', (req, res) => {
//     res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);

// });
// import renderApi from '@api/render-api';

// renderApi.auth('rnd_gyHrkkWBSF5ZXO94sCA5SCtZW20V');
// renderApi.listServices({name: '', includePreviews: 'true', limit: '20'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

//  "rnd_gyHrkkWBSF5ZXO94sCA5SCtZW20V"
// curl --request GET \
//      --url 'https://api.render.com/v1/services?includePreviews=true&limit=20' \
//      --header 'accept: application/json' \
//      --header 'authorization: Bearer http://localhost:3000'
 import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cloudRouter from './api/routers/Cloude.js'
const app = express()
const port = 3001
app.use(bodyParser.json())


app.use(cors())
 app.use('', cloudRouter)

app.listen(port, () => {
    console.log(`my application is listening on http://localhost:${port}`);
})