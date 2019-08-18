# Serverless S3 Trigger

[![License][license-image]][license-url]

A simple example project that demonstrates acting on AWS S3 events.

## Installation

```sh
git clone https://github.com/suzel/serverless-s3-trigger.git
cd serverless-s3-trigger
npm install
```

## Deployment

```sh
export AWS_ACCESS_KEY_ID=your_access_key_id
export AWS_SECRET_ACCESS_KEY=your_secret_access_key
npm run deploy
```

## Try it out

```sh
# Upload
touch test.txt
sls logs -f created -t
aws s3 cp test.txt s3://suzel-files/texts/test.txt

# Remove
sls logs -f removed -t
aws s3 rm s3://suzel-files/texts/test.txt
```

## License

The source code is licensed under the [MIT license](LICENSE).

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
