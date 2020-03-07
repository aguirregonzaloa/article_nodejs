const Joi = require('joi');

const express = require('express');

const mongoose = require('mongoose');
const {Article, validate} = require('../models/articleModel');

//MiddleWare to check is the course exists.
// exports.checkID = (req, res, next, val) =>{
// 	const course = courses.find(c => c.id === parseInt(val));

// 	if(!course) return res.status(404).send('The course was not found');

// 	return res.send(course);

// 	next();
// };



exports.getAllArticles = async (req,res) => {

	const articles = await Article.find();
	res.send(articles);
	
};

exports.createArticle = async (req,res) => {
	
	const {error} = validate(req.body);

	if(error) return res.status(400).send(error);

	let article = new Article ({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	});

	article = await article.save();
	res.send(article);
};

exports.getArticle = async (req,res) => {

	const article = await Article.findById(req.params.id);

	if(!article) return res.status(404).send('The Article was not found');

	res.send(article);
};

exports.updateArticle = async (req,res) => {

	const { error } = validate(req.body);
	if(error) return res.status(400).send(error);
	
    const article = await Article.findByIdAndUpdate(req.params.id,{
    	name: req.body.name,
		description: req.body.description,
		price: req.body.price
    });

    if (!article) return res.status(404).send('The article with the given ID was not found.');

    res.send(article);
};

exports.deleteArticle = async (req,res) => {

	const article = await Article.findByIdAndRemove(req.params.id);

	if(!article) return res.status(404).send('The article was not found');

	res.send(article);
};



