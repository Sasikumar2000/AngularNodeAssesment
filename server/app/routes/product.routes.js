const { Product } = require("../models/index.js");
 
module.exports = app => {
    const skProduct = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", skProduct.create);
  
    // Retrieve all Tutorials
    router.get("/", skProduct.findAll);
   
  
    // Retrieve all published Tutorials
    //router.get("/Product_Name", skProduct.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", skProduct.findOne);
    // Update a Tutorial with id
    router.put("/:id", skProduct.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", skProduct.delete);
  
    // Delete all Tutorials
    router.delete("/", skProduct.deleteAll);
  
    app.use('/api/skProducts', router);
  };