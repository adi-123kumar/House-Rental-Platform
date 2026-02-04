const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Property", propertySchema);
