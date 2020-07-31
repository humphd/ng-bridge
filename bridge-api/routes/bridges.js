const express = require('express');
const router = express.Router();
const passport = require('passport');

const db = require('../db');

/* (Protected) http://localhost:3000/api/bridges/id... */
router.get(
  '/bridges/:id',
  // We will require users to have a valid JSON Web Token to use this route
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    const id = req.params.id;
    const bridge = db.byId(id);

    if(!bridge) {
      return res.sendStatus(404);
    }

    res.json(bridge);
  }
);

/* (Public) http://localhost:3000/api/bridges */
router.get('/bridges', function(req, res) {
  res.json(db.all());
});

module.exports = router;
