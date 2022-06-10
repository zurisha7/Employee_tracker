const express = require('express');
const router = express.Router();
const mysql2 = require('mysql2');
const db = require('../../db/connection')

// Get all departments alphabetized
router.get('/departments', (req, res) => {
  const sql = `SELECT * FROM departments ORDER BY name`;

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

// Get single department
router.get('/departments/:department_id', (req, res) => {
  const sql = `SELECT * FROM departments WHERE department_id = ?`;
  const params = [req.params.department_id];

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