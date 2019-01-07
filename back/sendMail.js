// SEND VIA SMTP PROTOCOL

// import { gmailCredentials } from './credential'; // Does not work

/*
var gmailCredentials = require('./gmailCredentials.js')

var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2'), xoauth2gen;
xoauth2gen.getToken(function(err, token){
    if(err){
        return console.log(err);
    }
    console.log("AUTH XOAUTH2 " + token);
});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "Gmail",
    // Works en activant l' "accès moins sécurisé des applications"
    // auth: {
    //     user: gmailCredentials.user,
    //     pass: gmailCredentials.pass
    // }
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: gmailCredentials.user,
            clientId: gmailCredentials.client_id,
            clientSecret: gmailCredentials.client_secret,
            refreshToken: gmailCredentials.token_uri,
            accessToken: gmailCredentials.token_uri,
        })
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: gmailCredentials.adress, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
*/


// SEND VIA MAILGUN API - Works

// var mailgun = require("mailgun-js");

const express = require('express');
const router = express.Router();

var mailGunCredentials = require('./mailGunCredentials.js')
var api_key = mailGunCredentials.api_key;
var DOMAIN = mailGunCredentials.domain;

var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Quêtes Wild <wild@wild.com>',
  to: mailGunCredentials.adress,
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

router.post('/api/askForCookiesRecipe', (req,res) => {
    console.log(req.body)
    var data = {
        from: 'Quêtes Wild <wild@wild.com>',
        to: req.body.mail,
        subject: req.body.title,
        text: req.body.content
    };
    // res.send("I'm aliiiiiive !!")
    mailgun.messages().send(data, function (error, body) {
        if(error) console.log(error)
        else res.sendStatus(200);
    });
})

module.exports = router;