const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// findAll Tags with Associated Product Data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// findByPK Tag with Associated Product Data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create New Tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/// Update Tag Record By Param Id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(`Tag Id: ${req.params.id} has been updated`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Destroy Tag Record By Param Id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!tagData) {
      res.status(404).json({ alert: 'No Tag Found For That Id!' });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
