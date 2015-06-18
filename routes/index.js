var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('/views/index.html');
  res.render('index', null);
});

////displays our signup page
//router.get('/signin', function(req, res){
//  res.render('index', null);
//});
////
////sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
//app.post('/login', passport.authenticate('local-signin', {
//      successRedirect: '/',
//      failureRedirect: '/signin'
//    })
//);

module.exports = router;
