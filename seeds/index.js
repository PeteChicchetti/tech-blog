// Require
const sequelize = require('../config/connection');

const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData');

// Async function to seed the Database
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Bulkcreate the seed data for each model 
    await Comment.bulkCreate(commentSeedData);
    await Post.bulkCreate(postSeedData);
    await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();