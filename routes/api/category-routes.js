const router = require('express').Router(); // Import the express router
const { Category, Product } = require('../../models'); // Import the Category and Product models

// The `/api/categories` endpoint

// findAll categories with associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Categoreis Found' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find category by id with associatiated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category Id Not Found' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update category by id value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, { where: { id: req.params.id } });
    if (!categoryData) {
      res.status(404).json({ message: 'Category Id Not Found' });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// destroy a category by its id value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category Id Not Found' });
      return;
    }
    res.status(200).json(`Category Id: ${req.params.id} has been deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
