import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [50, 'Name can be no longer than 50 characters long'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

addUniqueValidatorToUserSchema();

const User = mongoose.model('User', userSchema);

export default User;

function addUniqueValidatorToUserSchema() {
  userSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.',
  });
}
