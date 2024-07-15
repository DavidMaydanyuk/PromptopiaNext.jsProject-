import { Schema, model, models } from "mongoose";

// Define the User schema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists!"],
    required: [true, "Username is required!"],
    match: [
      /^[a-zA-Z0-9]{4,30}$/,
      "Username invalid, it should contain 4-30 alphanumeric characters and be unique!",
    ]
  },
  image: {
    type: String,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the User model if it doesn't already exist
const User = models.User || model("User", UserSchema);

export default User;