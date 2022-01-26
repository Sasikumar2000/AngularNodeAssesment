const db = require("../models");

const Category = db.skCategory;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
     
   
    if (!req.body.Category_Id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    const skcategory = {
      Category_Id :req.body.Category_Id,
      Category_Name :req.body.Category_Name,
      Range : req.body.Range 
      };
    
  
    // Save Tutorial in the database
    
      Category.create(skcategory)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
   
  const id = req.params.id;
      const Category_Id = req.query.Category_Id;
      var condition = Category_Id ? { Category_Id: { [Op.like]: `%${Category_Id}%` } } : null;

      Category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    
  const id = req.params.id;
      Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving product with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

      Category.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Product was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating product with id=" + id
          });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
   
  const id = req.params.id;
      Category.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Product was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete product with id=${id}. Maybe product was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete product with id=" + id
          });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
   

        Category.destroy({
            where: {},
            truncate: false
          })
            .then(nums => {
              res.send({ message: `${nums} Products were deleted successfully!` });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all products."
              });
            });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    

    Category.findAll({ where: { Category_Id: req.body.Category_Id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};