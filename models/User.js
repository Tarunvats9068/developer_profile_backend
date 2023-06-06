const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    avatar: { type: String, required: true },
    Follower:[{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    Following:[{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
