const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const bodyParser = require('body-parser')
const controller = require('./controller')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post' , (req, res) => {
    res.send('Success Postingss')
})

app.get('/random.text', (req, res) => {
    res.send('random.text')
  })


app.get('/abc?d', (req, res) => {
    res.send('abc?d')
})

app.get('/user/:userId/book/:book' , myLogger , (req, res) => {
    res.send(req.params.book)
})


// app.post('/chat' , (req, res) => {
 
//    const url = 'https://www.seebotwa.com/api/create-message';
//    const data = {
//      appkey: '4fa65f4e-4d94-45e0-aa4f-3fa29370b2fc',
//      authkey: 'AvNVIh0rbVn6eP1tHwcVbac493LYtgdcretF005Ye8odth68PN',
//      to: '6287762582176',
//      message: req.body.data,
//      file: 'https://img.okezone.com/content/2022/03/10/408/2559181/5-kota-penghasil-wanita-cantik-di-jawa-timur-nomor-3-tempat-bung-karno-dimakamkan-scWrnlrMSl.JPG'
//    };
 
//    axios.post(url, data)
//      .then(response => {
//        console.log(response.data);
//        res.send('Success Send msg');
//      })
//      .catch(error => {
//        console.error(error);
//        res.status(500).send('Internal Server Error');
//      });
// })

app.post('/chat' , controller.sendMessage)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})