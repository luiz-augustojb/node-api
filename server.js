const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//iniciando o Data Base
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});

requireDir("./src/models");

//Rotas/routes
app.use("/api", require("./src/routes"));
app.listen(3001);
