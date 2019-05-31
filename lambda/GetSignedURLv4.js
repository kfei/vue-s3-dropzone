var AWS = require('aws-sdk')
var s3 = new AWS.S3();
var bucketName = process.env.AWS_BUCKET_NAME

exports.handler = async (event) => {
  let payload = {};
    if(event.body){
      payload = JSON.parse(event.body);
    }
    const params = {
        Bucket: bucketName,
        Key: payload.filePath,
        Expires: 3600,
        ContentType: payload.contentType
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": 'content-type',
      },
      body: {},
    }
    if (!payload.hasOwnProperty('contentType')) {
      response.body = JSON.stringify({
        err: 'Missing contentType'
      })
      return response;
    }

    if (!payload.hasOwnProperty('filePath')) {
      response.body = JSON.stringify({
        err: 'Missing filePath'
      })
      return response;
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
