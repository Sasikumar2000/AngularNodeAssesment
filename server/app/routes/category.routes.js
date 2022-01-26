
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const skCategory=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", skCategory.create);
  
    // Retrieve all Tutorials
    
    router.get("/", skCategory.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/Product_Name", skCategory.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", skCategory.findOne);
    // Update a Tutorial with id
    router.put("/:id", skCategory.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", skCategory.delete);
  
    // Delete all Tutorials
    router.delete("/", skCategory.deleteAll);
  
    app.use('/api/skCategorys', router);
  };