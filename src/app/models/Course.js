const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: String,
    description: String,
    slug: String,
    image: String,
    cost: String,
    videoId: String,
    slug: { type: String, slug: 'name', uniqe: true },
  });

module.exports = mongoose.model('Course', Course);
