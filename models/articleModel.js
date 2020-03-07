const Joi = require('joi');
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  date: {type: Date, default: Date.now },
});

const Article = mongoose.model('article', articleSchema);

function validateArticle(article) {
  const schema = {
    name: Joi.string().min(3).required(),
    description: Joi.string().required(),
    price: Joi.number().required()
  };

  return Joi.validate(article, schema);
}

exports.Article = Article; 
exports.validate = validateArticle;