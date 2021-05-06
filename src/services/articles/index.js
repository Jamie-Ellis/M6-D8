const express = require("express");
const Article = require('../../db').Article
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
     const articles = await Article.findAll()
     res.send(articles)
    
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const article = await Article.create(req.body)
      res.send(article)
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const article = await Article.findByPk(req.params.id)
      res.send(article)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const article = await Article.update(req.body, {where:{id:req.params.id}, returning:true})
      res.send(article)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
     const rows = await Article.destroy({where:{id:req.params.id}})
     if(rows>0) {
       res.send('ok')
     } else {
       res.status(404).send('Not found')
     }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

module.exports = router;