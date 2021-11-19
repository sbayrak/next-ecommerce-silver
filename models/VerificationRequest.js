import mongoose from 'mongoose';

const VerificationRequestSchema = new mongoose.Schema({
  email: {
    type: 'String',
  },
  password: {
    type: 'String',
  },
  verification: {
    type: 'String',
  },
  isVerified: {
    type: 'boolean',
    default: false,
  },
});

export default mongoose.models.VerificationRequest ||
  mongoose.model('VerificationRequest', VerificationRequestSchema);
