const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "First comment!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Hello!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "This is awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Who else is loving this?!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Can't wait to see what comes next!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Very insightful!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Great read! Can't recommend it enough."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Shared it with my friends and family!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;