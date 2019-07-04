/**
 * Users Controller for performing all Users related transactions 
 */
const User = require('../model/users');
const jwt = require('jsonwebtoken');
const config = require('../../config.json');

exports.users_get_by_name_password = (request, response, next) => {

    User.findOne({
        name: request.body.name
    }, (err, user) => {
        if (user.password != request.body.password) {
            response.json({
                success: false,
                message: 'Authentication failed. Wrong password.'
            })
        } else {
            const payload = {
                admin: user.admin
            }
            var token = jwt.sign(payload, config.secret, {
                expiresIn: 1440
            });

            response.json({
                success : true,
                message : 'Login successful. Welcome ' + user.name + ', please pass the token for all API calls.',
                token : token
            });
        }
    });
};