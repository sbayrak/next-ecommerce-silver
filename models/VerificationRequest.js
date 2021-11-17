import mongoose from 'mongoose';

const VerificationRequestSchema = new mongoose.Schema({
  email: {
    type: 'String',
  },
  password: {
    type: 'String',
  },
  token: {
    type: 'String',
  },
  isVerified: {
    type: 'boolean',
    default: false,
  },
});

export default mongoose.models.VerificationRequest ||
  mongoose.model('verificationRequest', VerificationRequestSchema);
