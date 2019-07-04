/**
 * 
 * images.js for manging the image upload/download to/from Firebase storage
 * 
 */
const admin = require('firebase-admin');
const imageConfig = require("../../imagesConfig.json");
const path = require('path');
const os = require('os');
const fs = require('fs');
const authenticationService = require('../services/authentication');

admin.initializeApp(imageConfig, "images");

exports.imageDownload = (request, response, next) => {

    var token = request.headers['x-access-token'];

    if (!token) {
        response.status(403).json({
            success: false,
            message: 'No access as token not provided. Generate token using /walmartproducts/authenticate API call'
        });
    } else {

        request.token = token;
        authenticationService
            .validate_token(request, response, next)
            .then()
            .catch(err => {
                console.log('Something went wrong during authentication. Please try later.');
        });

        const bucket = admin.storage().bucket();
        const tmpFilePath = path.join(os.tmpdir(), request.params.imageName);

        myBucketFunction(bucket, request.params.imageName, tmpFilePath);
        var mimetype = 'image/' + path.extname(tmpFilePath).split('.')[1];
        var img = fs.readFileSync(tmpFilePath);
        response.writeHead(200, {
            'Content-Type': mimetype
        });
        response.end(img, 'binary');

    }

    async function myBucketFunction(bucket, fileName, tmpFilePath) {
        try {
            await bucket.file('images/' + fileName).download({
                destination: tmpFilePath
            });
            console.log('Image downloaded locally to', tmpFilePath);
        } catch (error) {
            response.send(500).json({
                "message": "Image" + request.params.imageName + " not found or error loading the image from storage.",
                "statusCode": 500
            });
        };
    }
}