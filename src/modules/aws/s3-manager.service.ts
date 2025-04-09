import { Injectable } from '@nestjs/common';
import { InjectAwsService } from 'nest-aws-sdk';
import { S3 } from 'aws-sdk';
import { Readable } from 'stream';

@Injectable()
export class S3ManagerService {
  constructor(@InjectAwsService(S3) private readonly s3: S3) {}

  async listBuckets(): Promise<S3.Buckets | undefined> {
    return new Promise((resolve, reject) => {
      this.s3.listBuckets(function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Buckets);
        }
      });
    });
  }
  public getPrivateFile(Bucket: string, Key: string): Readable {
    const stream = this.s3
      .getObject({
        Bucket: Bucket,
        Key: Key,
      })
      .createReadStream();
    return stream;
  }

  public getSignedUrl(Bucket: string, Key: string, Expires?: number): string {
    const url: string = this.s3.getSignedUrl('getObject', {
      Bucket,
      Key,
      Expires,
    });

    return url;
  }
  // Call S3 to create the bucket

  // Call S3 to create the bucket
  async createBucket(bucketName: string): Promise<S3.Location | undefined> {
    const bucketParams = {
      Bucket: bucketName,
      ACL: 'public-read',
    };
    return new Promise((resolve, reject) => {
      this.s3.createBucket(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  }

  // Call S3 to create the bucket
  async uploadFile(
    bucketName: string,
    file: Buffer,
    key: string,
  ): Promise<S3.Location | undefined> {
    const uploadParams = { Bucket: bucketName, Key: key, Body: file };

    // call S3 to retrieve upload file to specified bucket
    return new Promise((resolve, reject) => {
      this.s3.upload(uploadParams, function (err, data) {
        if (err) {
          reject(err);
        }
        if (data) {
          resolve(data.Location);
        }
      });
    });
  }

  // Call S3 to create the bucket
  async listObjects(
    bucketName: string,
  ): Promise<S3.ListObjectsOutput | undefined> {
    const bucketParams = {
      Bucket: bucketName,
    };
    return new Promise((resolve, reject) => {
      this.s3.listObjects(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Call S3 to delete the bucket
  // The bucket must be empty in order to delete it.
  async deleteBucket(bucketName: string): Promise<any> {
    const bucketParams = {
      Bucket: bucketName,
    };
    return new Promise((resolve, reject) => {
      this.s3.deleteBucket(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Call S3 to delete object
  async deleteObject(
    bucketName: string,
    key: string,
  ): Promise<S3.DeleteObjectOutput> {
    const bucketParams = {
      Bucket: bucketName,
      Key: key,
    };
    return new Promise((resolve, reject) => {
      this.s3.deleteObject(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Call S3 to retrieve policy for selected bucket
  async getBucketPolicy(bucketName: string): Promise<S3.Policy> {
    const bucketParams = {
      Bucket: bucketName,
    };
    return new Promise((resolve, reject) => {
      this.s3.getBucketPolicy(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Policy);
        }
      });
    });
  }

  // Call S3 to retrieve policy for selected bucket
  async putBucketPolicy(bucketName: string): Promise<any> {
    // https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html
    const readOnlyAnonUserPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: `${Date.now()}`,
          Effect: 'Allow',
          Principal: '*',
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    };
    // convert policy JSON into string and assign into params
    const bucketPolicyParams = {
      Bucket: bucketName,
      Policy: JSON.stringify(readOnlyAnonUserPolicy),
    };

    return new Promise((resolve, reject) => {
      this.s3.putBucketPolicy(bucketPolicyParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Call S3 to delete policy for selected bucket
  async deleteBucketPolicy(bucketName: string): Promise<any> {
    const bucketParams = { Bucket: bucketName };
    return new Promise((resolve, reject) => {
      this.s3.deleteBucketPolicy(bucketParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
