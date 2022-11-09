const router = require('express').Router();
const {Comment, Post, User} = require('../models/');

// Get route for homepage
router.get('/', withAuth, async (req, res) => {
    
});

// Get route for posts
router.get('/post/:id', withAuth, async (req, res) => {

});

// Get route for login
router.get('/login', withAuth, async (req, res) => {

});

// Get route for sign up
router.get('/signup', withAuth, async (req, res) => {

});

module.exports = router;