const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

// Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
// Comment belongs to Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
// Comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// Post has many Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
// User has many Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// User has many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };