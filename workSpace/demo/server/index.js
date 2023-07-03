const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/openai', (req, res) => {
  // console.log(req.body.question);
  // 向openAi 转发请求
  axios.post(
    'https://service-ryzeieno-1319132706.usw.apigw.tencentcs.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: req.body.question }],
      temperature: 0.7
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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'
      }
    }
  ).then((response) => {
    console.log(JSON.stringify(response.data.choices));
  })
})


app.listen(3000, () => {
  console.log('listening on port 3000');
})