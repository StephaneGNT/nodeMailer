// Déclaration de l'ensemble des librairies nécessaires
const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const app = express();
const mail = require('./sendMail');

// Configuration de l'application
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
)

let server = app.listen(5000, function () {
  console.log('Listening on port ' + server.address().port);
});

app.use(mail);