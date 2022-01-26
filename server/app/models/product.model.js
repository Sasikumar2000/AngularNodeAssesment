module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("SKProduct", {
    
    Product_Id: {
      type: Sequelize.INTEGER
    },
    Product_Name: {
      type: Sequelize.STRING
    },
    Processor: {
      type: Sequelize.STRING
    },
    CountryOfOrgin: {
      type: Sequelize.STRING

    },
    Price: {
      type: Sequelize.INTEGER

    }
  },
  {
    timestamps: false
  });

  return Tutorial;
};