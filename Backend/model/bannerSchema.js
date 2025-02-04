const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
});


const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
