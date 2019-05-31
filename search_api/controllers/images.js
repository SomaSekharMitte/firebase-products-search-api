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

admin.initializeApp(imageConfig, "images");

exports.imageDownload = (request, response, next) => {

    const bucket = admin.storage().bucket();
    const tmpFilePath = path.join(os.tmpdir(), request.params.imageName);

    // maps file extention to MIME types
    const mimeType = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif'
    };

    myBucketFunction(bucket, request.params.imageName, tmpFilePath);

    response.status(200).json({
        "message": "Image downloaded to path: " + tmpFilePath,
        "statusCode": 200
    });

    async function myBucketFunction(bucket, fileName, tmpFilePath) {
        await bucket.file('images/'+fileName).download({destination: tmpFilePath});
        console.log('Image downloaded locally to', tmpFilePath);
    }
}
