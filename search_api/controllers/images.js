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

    myBucketFunction(bucket, request.params.imageName, tmpFilePath);
    var mimetype = 'image/' + path.extname(tmpFilePath).split('.')[1];
    var img = fs.readFileSync(tmpFilePath);
    response.writeHead(200, {'Content-Type': mimetype });
    response.end(img, 'binary');

    async function myBucketFunction(bucket, fileName, tmpFilePath) {
        try {
            await bucket.file('images/'+fileName).download({destination: tmpFilePath});
            console.log('Image downloaded locally to', tmpFilePath);
        }  catch (error) {
            response.send(500).json({
                "message": "Image" + request.params.imageName + " not found or error loading the image from storage.",
                "statusCode": 500
            });
        };
    }
}
