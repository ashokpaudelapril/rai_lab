// server/routes/people.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// @route   GET api/people
// @desc    Get all active people
// @access  Public
router.get('/', personController.getPeople);

// @route   GET api/people/alumni
// @desc    Get all alumni people
// @access  Public
router.get('/alumni', personController.getAlumni);

// @route   GET api/people/:id
// @desc    Get single person by ID
// @access  Public
router.get('/:id', personController.getPersonById);

// @route   POST api/people
// @desc    Create a person
// @access  Private (add authentication middleware here later)
router.post('/', personController.createPerson);

// @route   PUT api/people/:id
// @desc    Update a person
// @access  Private (add authentication middleware here later)
router.put('/:id', personController.updatePerson);

// @route   DELETE api/people/:id
// @desc    Delete a person
// @access  Private (add authentication middleware here later)
router.delete('/:id', personController.deletePerson);

module.exports = router;