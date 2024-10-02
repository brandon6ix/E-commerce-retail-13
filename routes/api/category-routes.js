const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
    }).then((categoryData) => {
      res.json(categoryData);
    }).catch((err) => {
      res.status(500).json(err);
    });
    console.log(req.body);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
    }).then((categoryData) => {
      res.json(categoryData);
    }).catch((err) => {
      res.status(500).json(err);
    });
    console.log(req.body);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
    }).then((category) => {
      res.status(200).json(category);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
    console.log(req.body);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
    ).then((category) => {
      res.status(200).json(category);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
    console.log(req.body);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
    }).then((category) => {
      res.status(200).json(category);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
    console.log(req.body);
});

module.exports = router;
