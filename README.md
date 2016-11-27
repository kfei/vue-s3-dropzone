# vue-s3-dropzone

> Vue 2.0 dropzone component uploads files to AWS S3 serverlessly.

## Overview

  - A Vue.js 2.0 component wrapping [Dropzone.js](https://github.com/enyo/dropzone)
  - Upload files to AWS S3 *serverlessly* with AWS Lambda.

## Demo

![demo-gif](https://i.giphy.com/3oriNVluNp8DmKgvFS.gif)

## Quickstart

Clone this repo:

```
git clone https://github.com/kfei/vue-s3-dropzone
```

This repo contains two directories: **frontend** and **lambda**. You must first
create the AWS Lambda function and deploy it onto AWS API Gateway. Then put the
invoke URL into `frontend/src/config.js` so that you can run and test the Vue
powered web client by:

```
cd frontend
yarn install
npm run dev
```

Please make sure you have correct priviledge/policy/CORS settings on AWS. Feel
free to open an issue if you happened to be trapped by that. :cry:

## License

MIT
