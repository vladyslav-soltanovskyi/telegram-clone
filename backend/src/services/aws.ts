import type {
  DeleteObjectOutput,
  DeleteObjectRequest,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';
import S3 from 'aws-sdk/clients/s3';
import { FileTypes, MaxSizeFiles, S3Folders } from '@telegram-clone/shared';
import {
  UnsupportedFileExtensionError,
  NoFileProvidedError,
  FileSizeTooLargeError
} from '@errors/index';
import type {
  IFileUpload
} from '@types-app/index';
import { getEnv, loggerService } from '@helpers/index';
import type { AWSError } from 'aws-sdk';
import type { PromiseResult } from 'aws-sdk/lib/request';
import { randomBytes } from 'crypto';

export class AWSService {
  private _client: S3;

  private _bucketName: string;

  constructor() {
    this._bucketName = getEnv('S3_BUCKET_NAME');

    this._client = new S3({
      endpoint: getEnv('S3_API_LINK'),
      credentials: {
        accessKeyId: getEnv('S3_API_KEY'),
        secretAccessKey: getEnv('S3_API_SECRET'),
      },
    });
  }

  async deleteFile(
    filename: string,
    typeFile: FileTypes = FileTypes.FILE
  ): Promise<PromiseResult<DeleteObjectOutput, AWSError>> {
    console.log(filename);
    const folderPath = this.getFolderPathByTypeFile(typeFile);
    const params = this.createDeleteParams(filename, folderPath);

    const result = await this._client
      .deleteObject(params, (err, _data) => {
        err && loggerService.error(err);
      })
      .promise();

    return result;
  }

  async uploadFile(
    file: IFileUpload,
    typeFile: FileTypes = FileTypes.FILE
  ): Promise<string> {
    return await this.validateAndUploadFile(file, typeFile);
  }

  async uploadFiles(
    files: IFileUpload[],
    typeFile: FileTypes = FileTypes.FILE
  ): Promise<string[]> {

    const imagePromises = files.map((file) =>
      this.validateAndUploadFile(file, typeFile),
    );

    return await Promise.all(imagePromises);
  }

  private async validateAndUploadFile(
    file: IFileUpload,
    typeFile: FileTypes
  ): Promise<string> {
    if (!file) {
      throw new NoFileProvidedError();
    }

    if (!this.isTypeFileValid(file.mimetype, typeFile)) {
      throw new UnsupportedFileExtensionError();
    }
    
    const maxFileSizeBytes = this.getMaxFileSizeByType(typeFile);
    if (!this.isFileSizeValid(file.size, maxFileSizeBytes)) {
      throw new FileSizeTooLargeError();
    }

    const folderPath = this.getFolderPathByTypeFile(typeFile);
    const extension = file.mimetype.split('/')[1];
    const filename = this.generateFilename(extension);
    const params = this.createUploadParams(
      filename,
      folderPath,
      file.buffer,
    );
    
    const uploadImage = await this._client.upload(params).promise();

    return uploadImage.Location;
  }

  private generateFilename(extension: string): string {
    return randomBytes(16).toString('hex') + `.${extension}`;
  }

  private createUploadParams(
    filename: string,
    folder: string,
    body: Buffer,
  ): PutObjectRequest {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
      Body: body,
      ACL: 'public-read',
    };
  }

  private createDeleteParams(
    filename: string,
    folder: string,
  ): DeleteObjectRequest {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
    };
  }

  private getFolderPathByTypeFile(typeFile: FileTypes): S3Folders {
    switch(typeFile) {
      case FileTypes.MUSIC:
        return S3Folders.MUSIC;
      case FileTypes.VOICE:
        return S3Folders.VOICES;
      case FileTypes.PHOTO:
        return S3Folders.PHOTOS;
      case FileTypes.USER_IMAGE:
        return S3Folders.USER_IMAGES;
      default:
        return S3Folders.FILES;
    }
  }

  private isTypeFileValid(mimetype: string, typeFile: FileTypes): boolean {
    if (typeFile === FileTypes.PHOTO || typeFile === FileTypes.USER_IMAGE) {
      return mimetype.includes('image/');
    }
    
    if (typeFile === FileTypes.MUSIC || typeFile === FileTypes.VOICE) {
      return mimetype.includes('audio/');
    }

    return true;
  }

  private isFileSizeValid(size: number, maxFileSizeBytes: number): boolean {
    return size <= maxFileSizeBytes;
  }

  private getMaxFileSizeByType(typeFile: FileTypes) {
    let maxFileSizeBytes: number = MaxSizeFiles.FILE;

    if (typeFile === FileTypes.MUSIC || typeFile === FileTypes.VOICE) {
      maxFileSizeBytes = MaxSizeFiles.AUDIO;
    }
    else if (typeFile === FileTypes.PHOTO || typeFile === FileTypes.USER_IMAGE) {
      maxFileSizeBytes = MaxSizeFiles.IMAGE;
    }

    return maxFileSizeBytes;
  }
}
