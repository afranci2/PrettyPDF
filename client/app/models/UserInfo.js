import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema({
  email: { type: String, required: true },
  lastName: { type: String },
  firstName: { type: String },
  streetAddress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  country: { type: String },
  phone: { type: String },
  admin: { type: Boolean, default: false },
  tier: { type: String, enum: ['free', 'premium'], default: 'free' }, // Assuming you have tiers like 'free' and 'premium'
  pdfUploads: [{ type: Schema.Types.ObjectId, ref: 'PDFDocument' }], // Assuming you have a model named 'PDFDocument'
  isSubscribed: { type: Boolean, default: false }, // To track if the user is subscribed to premium features
  subscription: { type: Schema.Types.ObjectId, ref: 'Subscription' },

}, { timestamps: true });

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);
