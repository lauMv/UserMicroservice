const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");

require("./db.config");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", routes);

app.listen(8080, () => {
   console.log("run--->");
});
