const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all managers alphabetized by last name
router.get('/managers', (req, res) => {
    const sql = `SELECT * FROM managers ORDER BY last_name`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  // Get single manager
router.get('/managers/:manager_id', (req, res) => {
    const sql = `SELECT * FROM managers WHERE manager_id = ?`;
    const params = [req.params.manager_id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });
module.exports = router