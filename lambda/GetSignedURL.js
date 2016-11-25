var AWS = require('aws-sdk')
var s3 = new AWS.S3();
var bucketName = process.env.AWS_BUCKET_NAME

exports.handler = (event, context) => {
    if (!event.hasOwnProperty('contentType')) {
        context.fail({ err: 'Missing contentType' })
    }

    if (!event.hasOwnProperty('filePath')) {
        context.fail({ err: 'Missing filePath' })
    }

    var params = {
        Bucket: bucketName,
        Key: event.filePath,
        Expires: 3600,
        ContentType: event.contentType
    }

    s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
            context.fail({ err })
        } else {
            context.succeed({ url })
        }
    })
}
