const express = require("express");

const articlesRouter = require("./services/articles");
const authorsRouter = require("./services/authors");
const categoriesRouter = require("./services/categories");
const reviewsRouter = require("./services/reviews");
const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/articles", articlesRouter);
server.use("/authors", authorsRouter);
server.use("/categories", categoriesRouter);
server.use("/reviews", reviewsRouter);
db.sequelize.sync({ force: false }).then((result) => {
 return db.User.findByPk(1)
  
}).then(async user=> {
  if(!user) {
    const newUser = await db.User.create({
      firstName: "Jamie",
      lastName: "Ellis",
      email: "jamiekyaellis@gmail.com",
    })
  }
}).then(()=>{
  server.listen(process.env.PORT || 3002, () => {
    console.log("server is running on port ", process.env.PORT || 3002);
  });
})