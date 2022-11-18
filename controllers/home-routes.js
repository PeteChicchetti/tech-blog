const router = require('express').Router();
const { Comment, Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// Get route for homepage
router.get('/', async (req, res) => {
    res.render('all-posts')
  // try {
  //   const posts = await Post.findAll({
  //     include: [{
  //       model: User
  //     }],
  //   });
  //   // const postContent = posts.map((post) => Post.get({ plain: true }));
  //   //   res.render('all-posts', {
  //   //     posts,
  //   //     logged_in: req.session.logged_in
  //   //   });
  // } catch(err) {
  //   res.status(500).json(err);
  // }

});

// Get route for posts
router.get('/post/:id', withAuth, async (req, res) => {

});

router.get('/signup', async (req, res) => {
  res.render('signup')
})

// Get route for login
router.get('/login', async (req, res) => {
  if(req.session.loggedin) {
    res.redirect('/');
    return;
  } else {
    res.render('./login');
  }
});


module.exports = router;