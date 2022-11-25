const Product = require("../model/Product");
const {ajobs,auser,auserjobs} = require('../model/Product.js');

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await auser.find();
        res.json(products);
      } catch (error) {
        res.json({ message: "error" });
      }
};

const product_all1 = async (req, res) => {
  try {
      const products = await ajobs.find();
      res.json(products);
    } catch (error) {
      res.json({ message: "error" });
    }
};

const product_all2 = async (req, res) => {
  try {
      const products = await auserjobs.find();
      res.json(products);
    } catch (error) {
      res.json({ message: "error" });
    }
};


const produ = async (req, res) => {
  try {
      const prod = await auserjobs.aggregate([{
        $lookup:{
          from:'jobs',
          localField:'title',
          foreignField:'job',
          as:'profession' 
        }
      }
      // ,{
      //   $project:{
      //     _id:0,profession:1
      //   }
      //}

      // ,{
      //   $project:{
      //     code:1
      //   }
      // }
    ]);
      return res.json(prod);
    } catch (error) {
      res.json({ message: error });
    }
};



const produe = async (req, res) => {
  try {
      const prosd = await auser.find({$and: [{username: {$eq: req.params.username}},{password: {$eq: req.params.password}}]});
      return res.json(prosd);
    } catch (error) {
      res.json({ message: "wrong user login " });
    }
};





const product_create1 = async (req, res) => {
  const product = new auser({
      username: req.body.username,
      password: req.body.password,
      phonenumber:req.body.phonenumber,
      gmail:req.body.gmail
    });
  
    try {
      const savedProduct = await product.save();
      res.send(savedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
};


const product_create2 = async (req, res) => {
  const product = new auserjobs({
      user: req.body.user,
      title: req.body.title
    });
  
    try {
      const savedProduct = await product.save();
      res.send(savedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
};




// Single product
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        job: req.body.job,
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
          name: String,
          job: String
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};



module.exports = {
    product_all, 
    product_all1,
    product_all2,
    produ,
    produe,
    product_details, 
    product_create, 
    product_create1,
    product_create2,
    product_update, 
    product_delete
  }