const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');

const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const signin = require('./controllers/signin');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'rabelo',
    password : '0014141293',
    database : 'smart-brain'
  }
});

// db.select('*').from('users').then(data => {
//   console.log(data);
// });



const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send(database.users);
})



app.post('/signin', (req, res) => { signin.handleSignin(req,res, db, bcrypt)})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.hadleProfile(req, res, db)})

app.put('/image', (req, res) => { image.handleImage(req, res, db)})

app.post('./imageurl', (req, res) => { image.handleImage(req, res)})


app.listen(3000, () => {
  console.log('app is running on port 3000');
})

/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET --> user
/image --> PUT --> user

*/
