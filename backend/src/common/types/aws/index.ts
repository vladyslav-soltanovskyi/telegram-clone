export interface IFileUpload {
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}