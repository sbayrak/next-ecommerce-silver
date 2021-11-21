import mongoose from 'mongoose';

const VerificationRequestSchema = new mongoose.Schema({
  email: {
    type: 'String',
    required: true,
  },
  password: {
    type: 'String',
  },
  verification: {
    type: 'String',
    required: true,
  },
  isVerified: {
    type: 'boolean',
    default: false,
  },
});

export default mongoose.models.VerificationRequest ||
  mongoose.model('VerificationRequest', VerificationRequestSchema);
