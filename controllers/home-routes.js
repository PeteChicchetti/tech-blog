const router = require('express').Router();
const { Comment, Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// Get route for homepage
router.get('/', withAuth, async (req, res) => {
      // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/main');
    return;
  }

  res.render('signup');
});

// Get route for posts
router.get('/post/:id', withAuth, async (req, res) => {

});

// Get route for login
router.get('/login', withAuth, async (req, res) => {

});

// Get route for sign up
router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('signup');
});

module.exports = router;