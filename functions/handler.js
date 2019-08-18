'use strict';

module.exports.created = (event, context, callback) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Created: ${key} Bucket: ${bucket}`);
  callback(null);
};

module.exports.removed = (event, context, callback) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Removed: ${key} Bucket: ${bucket}`);
  callback(null);
};
