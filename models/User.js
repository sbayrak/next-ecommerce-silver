import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: 'String',
    required: true,
  },
  password: {
    type: 'String',
  },
  registeredAtDate: {
    type: 'date',
  },
});

export default mongoose.models.User || mongoose.model('user', UserSchema);
