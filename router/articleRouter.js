const express = require('express');

const router = express.Router();

const articleController = require('./../controller/articleController');

const articleMiddleware = require('../middleware/testing');

// router.param('id',articleController.checkID);

router
.route('/')
.get(articleController.getAllArticles)
.post(articleController.createArticle);

router
.route('/:id')
.get( articleController.getArticle)
.put(articleController.updateArticle)
.delete(articleController.deleteArticle);



module.exports = router;