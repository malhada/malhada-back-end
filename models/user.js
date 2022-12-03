const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, minLength: 4 },
  password: { type: String, required: true, minLength: 1 },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  time_created: { type: String, required: true },
});

UserSchema.virtual("url").get(function() {
  return `/user/${this.id}`
});

module.exports = mongoose.model("User", UserSchema);