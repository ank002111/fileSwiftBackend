import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    unique: true,
  },

  downloadContent: {
    type: Number,
    required: true,
    default: 0,
  },
});

const File = mongoose.model('file',fileSchema);
export default File;