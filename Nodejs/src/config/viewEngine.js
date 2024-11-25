import express from "express";

let congfigViewEngine = (app) => {
  //arrow function
  app.use(express.static("./src/public"));
  app.set("View engine", "ejs"); //jsp, blade
  app.set("views", "./src/views");
};
module.exports = congfigViewEngine;
