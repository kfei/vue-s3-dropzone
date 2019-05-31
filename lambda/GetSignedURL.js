var AWS = require('aws-sdk')
var s3 = new AWS.S3();
var bucketName = process.env.AWS_BUCKET_NAME

exports.handler = async (event) => {
    const params = {
        Bucket: bucketName,
        Key: event.filePath,
        Expires: 3600,
        ContentType: event.contentType
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: {},
    }
    if (!event.hasOwnProperty('contentType')) {
      response.body = JSON.stringify({
        err: 'Missing contentType'
      })
    }

    if (!event.hasOwnProperty('filePath')) {
      response.body = JSON.stringify({
        err: 'Missing filePath'
      })
    }

    try{
      const url = await _getUrl(params);
      response.body = JSON.stringify({
        url
      })
    }catch(err){
      response.body = JSON.stringify({
        err: err
      })
    }
    console.log(response);
    return response;

    function _getUrl(params){
      return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', params, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        })
      });
    }
};
