const { User } = require('../models');

const userData = [
    {
        username: "john_doe",
        email: "johndoe@gmail.com",
        password: "P@ssword1"
    },
    {
        username: "jane_doe",
        email: "janedoe@gmail.com",
        password: "P@ssword2"
    },
    {
        username: "brian99",
        email: "brian99@aol.com",
        password: "P@ssword3"
    },
    {
        username: "tiffaknee",
        email: "tiffany_e@gmail.com",
        password: "P@ssword4"
    },
    {
        username: "bester_esther",
        email: "estherb@aol.com",
        password: "P@ssword5"
    },
    {
        username: "ableabe",
        email: "abe_abe@gmail.com",
        password: "P@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;