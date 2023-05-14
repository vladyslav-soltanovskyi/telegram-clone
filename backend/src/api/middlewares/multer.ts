import multer from 'multer';

export const uploadFile = multer().single('file');
export const uploadFiles = multer().array('files');
