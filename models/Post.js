const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, required: true },
  image: { type: Image },
  likes: { type: Number},
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

PostSchema.virtual("url").get(function() {
  return `/post/${this.id}`;
});