const mongoose = require("mongoose");

const Product = mongoose.model("Product");


module.exports = {
  async index(req, res) {
      //criando páginas e limitando o conteúdo
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },
  //Localizar o id de um produto
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },
   //Criando o produto
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },
  //Fazendo o update do produto
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },
   //Deletando o produto
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
