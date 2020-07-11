const express = require('express');
const router = express.Router();

const db = require('../db');

/* http://localhost:3000/api/bridges/id... */
router.get('/bridges/:id', function(req, res) {
  const id = req.params.id;
  const bridge = db.byId(id);

  if(!bridge) {
    return res.sendStatus(404);
  }

  res.json(bridge);
});

/* http://localhost:3000/api/bridges */
router.get('/bridges', function(req, res) {
  res.json(db.all());
});

module.exports = router;
