const { Post } = require('../models');

const postData = [
    {
        title: "Andy Bock is a new web developer!",
        post_content: "Check out the live portfolio for Andy Bock, a new full stack web developer.",
        user_id: 3
    },
    {
        title: "Rock Paper Scissors app!",
        post_content: "Rock Paper Scissors has long been regarded as the purest way to resolve any conflict. Now you can play it online!",
        user_id: 1
    },
    {
        title: "Work-N-Flow is live!",
        post_content: "A calendar application that uses color coding and local storage to block out productive parts of the day.",
        user_id: 2

    },
    {
        title: "People can't get enough of Ask Alice!",
        post_content: "Ask Alice is a Recall Rabbit Hole for recalled prescription drugs.",
        user_id: 4
    },
    {
        title: "Brought to you by Blog-N-Tech",
        post_content: "You're currently viewing the latest and hottest blog about tech.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;