## Quickstart

  1. create a blank AWS Lambda function
  2. choose Node 4.3 runtime
  3. paste the code in `GetSignedURL.js` to the Lambda function code
  4. add an env variable `AWS_BUCKET_NAME` with value equals to your S3 bucket
     name
  5. create an API on AWS API Gateway to trigger the Lambda function
  6. deploy the API
  7. done

## Hints
  - the role of the Lambda function should have the correct permission on your
    S3 bucket
  - you should enable CORS and have a correct setting both in API Gateway and
    S3 bucket
