import { model, models, Schema } from 'mongoose';

const PDFDocumentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  fileSize: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const PDFDocument = models?.PDFDocument || model('PDFDocument', PDFDocumentSchema);
