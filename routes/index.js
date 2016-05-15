var express = require('express');
var router = express.Router();
var accountDAL = require('../model/account_dal');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title : 'Pokelab'
  }
  if(req.session.account === undefined) {
    res.render('index', data);
  }
  else {
    data.firstname = req.session.account.firstname;
    res.render('index', data);
  }
});
router.get('/authenticate', function(req, res) {
  accountDAL.GetByEmail(req.query.email, req.query.password, function (err, account) {
    if (err) {
      res.send(err);
    }
    else if (account == null) {
      res.send("User not found.");
    }
    else {
      req.session.account = account;
      if(req.session.originalUrl = '/login') {
        req.session.originalUrl = '/'; //don't send user back to login, instead forward them to the homepage.
      }
      res.redirect(req.session.originalUrl);
      //res.send(account);
    }
  });
});

router.get('/login', function(req, res, next) {
  if(req.session.account) {
    res.redirect('/'); //user already logged in so send them to the homepage.
  }
  else {
    res.render('./authentication/login.ejs');
  }
});

router.get('/logout', function(req, res) {
  req.session.destroy( function(err) {
    res.render('/logout.ejs');
  });
});
module.exports = router;
