import { model, models, Schema } from 'mongoose';

const SubscriptionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true }
});

export const Subscription = models?.Subscription || model('Subscription', SubscriptionSchema);
