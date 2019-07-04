const jwt = require('jsonwebtoken');
const config = require('../../config.json');

module.exports = {
    validate_token
};

async function validate_token (request, response, next) {

    console.log('Authentcation Service');
    jwt.verify(request.token, config.secret, (err, decoded) => {
        if(err) {
            return response.status(403).json({
                success : false,
                message : 'Authentication Failure. Please check if token is expiried or invalid. Generate one using /walmartproducts/authenticate.',
                statusCode : 403
            });
        } else {
            request.decoded = decoded;
        }
    })
}