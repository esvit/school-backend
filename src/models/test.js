import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true }
});

export default mongoose.model('test', schema);
