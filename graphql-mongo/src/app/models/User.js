import mongoose from 'mongoose';
import { bcrypt } from 'bcryptjs';
import { jwt } from 'jsonwebtoken';
import { authSecret, expiresIn } from '../config/settings';

// Create the User Schema.
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAd: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function hashPassowrd(next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },

  generateToken() {
    return jwt.sign({ id: this.id }, authSecret, {
      expiresIn,
    });
  },
};

const User = mongoose.model('User', UserSchema);

export default User;
