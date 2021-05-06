const express = require("express");
const Author = require('../../db').Author
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
     const authors = await Author.findAll()
     res.send(authors)
    
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const author = await Author.create(req.body)
      res.send(author)
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const author = await Author.findByPk(req.params.id)
      res.send(author)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const author = await Author.update(req.body, {where:{id:req.params.id}, returning:true})
      res.send(author)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
     const rows = await Author.destroy({where:{id:req.params.id}})
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