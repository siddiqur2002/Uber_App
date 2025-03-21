const userModel = require('../models/user.model');

// Creation of user for register and login setup....

module.exports.createUser = async ({
    firstName, lastName, email, password
}) => {
    if(!firstName || !email || !password){
        throw new Error('All field are required!');
    }

    const user = userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    })

    return user;
}

// creating user done here for register and login........


