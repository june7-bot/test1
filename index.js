const express = require('express')
const app = express()
const port = 5000
const bodyParser =require('body-parser');
const {User} = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('moongoose')
mongoose.connect('mongodb+srv://clint:1234@cluster0.m8mub.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then( () => console.log('success'))
.catch(err => console.log(err))



n
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})