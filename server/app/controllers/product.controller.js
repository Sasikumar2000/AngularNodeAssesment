const db = require("../models");
const skProduct = db.skProducts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.Product_Id) 
    {
        res.status(400).send(
        {
          message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const product = {
      Product_Id: req.body.Product_Id,
      Product_Name: req.body.Product_Name,
      Processor:req.body.Processor,
      CountryOfOrgin:req.body.CountryOfOrgin,
      Price:req.body.Price
    };
  
    // Save Tutorial in the database
    skProduct.create(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const Product_Id = req.query.Product_Id;
    var condition = Product_Id ? { Product_Id: { [Op.like]: `%${Product_Id}%` } } : null;
  
    skProduct.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    skProduct.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    skProduct.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "skProduct was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    skProduct.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.json("alert('your alert message');");
        } else {
          res.send({
            message: `Cannot delete skProduct with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete skProduct with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  skProduct.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} skProduct were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published Tutorials
exports.findAllRate = (req, res) => {

  skProduct.findAll({ where: {Product_Name : req.body.Product_Name} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};