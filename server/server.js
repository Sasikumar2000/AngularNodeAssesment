const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin : "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const db = require("./app/models")
db.sequelize.sync();

app.get("/",(req,res) => {
    res.json({ message : "welcome Sasikumar"});

});

require("./app/routes/product.routes")(app);
require("./app/routes/category.routes")(app);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})


