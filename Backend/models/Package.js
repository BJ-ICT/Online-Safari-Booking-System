const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Bronze, Silver, Gold
  description: { type: String },
  price: { type: Number, required: true },
  services: [{ type: String }], // Array of services included
});

module.exports = mongoose.model('Package', PackageSchema);
