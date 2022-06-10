const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all roles alphabetized by Job title
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles ORDER BY job_title`;
  
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

  // Get single role
router.get('/roles/:role_id', (req, res) => {
    const sql = `SELECT * FROM roles WHERE role_id = ?`;
    const params = [req.params.role_id];
  
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