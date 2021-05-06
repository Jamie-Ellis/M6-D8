const express = require("express");
const Review = require('../../db').Review
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
     const reviews = await Review.findAll()
     res.send(reviews)
    
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const review = await Review.create(req.body)
      res.send(review)
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const review = await Review.findByPk(req.params.id)
      res.send(review)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const review = await Review.update(req.body, {where:{id:req.params.id}, returning:true})
      res.send(review)
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
     const rows = await Review.destroy({where:{id:req.params.id}})
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