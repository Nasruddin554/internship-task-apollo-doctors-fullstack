const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST API - Add a new doctor
router.post('/', async (req, res) => {
  try {
    const {
      image,
      name,
      title,
      years,
      degree,
      location,
      clinicLocation,
      rating,
      patients,
      price,
      cashback,
      availability
    } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required fields' });
    }

    const [result] = await db.execute(
      `INSERT INTO doctors 
      (image, name, title, years, degree, location, clinicLocation, rating, patients, price, cashback, availability_minutes) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        image || null,
        name,
        title || null,
        years || null,
        degree || null,
        location || null,
        clinicLocation || null,
        rating || null,
        patients || null,
        price,
        cashback || null,
        availability?.minutes || null
      ]
    );

    const [newDoctor] = await db.execute('SELECT * FROM doctors WHERE id = ?', [result.insertId]);
    res.status(201).json(newDoctor[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error adding doctor', error: error.message });
  }
});

// GET API - Get doctors with filters and pagination
router.get('/', async (req, res) => {
  try {
    const { 
      name, 
      minYears, 
      maxPrice, 
      location, 
      degree, 
      minRating,
      page = 1,
      limit = 10,
      sort,
      availableNow
    } = req.query;

    let query = 'SELECT * FROM doctors WHERE 1=1';
    let countQuery = 'SELECT COUNT(*) as total FROM doctors WHERE 1=1';
    const params = [];
    const countParams = [];

    if (name) {
      query += ' AND name LIKE ?';
      countQuery += ' AND name LIKE ?';
      params.push(`%${name}%`);
      countParams.push(`%${name}%`);
    }
    if (minYears) {
      query += ' AND years >= ?';
      countQuery += ' AND years >= ?';
      params.push(parseInt(minYears));
      countParams.push(parseInt(minYears));
    }
    if (maxPrice) {
      query += ' AND price <= ?';
      countQuery += ' AND price <= ?';
      params.push(parseFloat(maxPrice));
      countParams.push(parseFloat(maxPrice));
    }
    if (location) {
      query += ' AND location LIKE ?';
      countQuery += ' AND location LIKE ?';
      params.push(`%${location}%`);
      countParams.push(`%${location}%`);
    }
    if (degree) {
      query += ' AND degree LIKE ?';
      countQuery += ' AND degree LIKE ?';
      params.push(`%${degree}%`);
      countParams.push(`%${degree}%`);
    }
    if (minRating) {
      query += ' AND rating >= ?';
      countQuery += ' AND rating >= ?';
      params.push(parseFloat(minRating));
      countParams.push(parseFloat(minRating));
    }
    if (availableNow === 'true') {
      query += ' AND availability_minutes <= 15';
      countQuery += ' AND availability_minutes <= 15';
    }

    if (sort) {
      switch (sort) {
        case 'price_asc':
          query += ' ORDER BY price ASC';
          break;
        case 'price_desc':
          query += ' ORDER BY price DESC';
          break;
        case 'rating':
          query += ' ORDER BY rating DESC';
          break;
        case 'experience':
          query += ' ORDER BY years DESC';
          break;
        default:
          query += ' ORDER BY id DESC';
      }
    } else {
      query += ' ORDER BY id DESC';
    }

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const offset = (pageNum - 1) * limitNum;

    // Interpolate LIMIT and OFFSET directly (avoid using ? placeholders for these)
    query += ` LIMIT ${limitNum} OFFSET ${offset}`;

    console.log('Executing query:', query);
    console.log('With params:', params);

    const [doctors] = await db.execute(query, params);
    const [countResult] = await db.execute(countQuery, countParams);

    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limitNum);

    res.json({
      data: doctors,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Error fetching doctors', error: error.message });
  }
});

module.exports = router;
