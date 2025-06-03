// server/controllers/personController.js
const Person = require('../models/Person');

// @desc    Get all active people, sorted by order and then role
// @route   GET /api/people
// @access  Public
exports.getPeople = async (req, res) => {
    try {
        const people = await Person.find({ isActive: true })
            .sort({ order: 1, role: 1, name: 1 });
        res.json(people);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get all alumni people, sorted by order and then role
// @route   GET /api/people/alumni
// @access  Public
exports.getAlumni = async (req, res) => {
    try {
        const alumni = await Person.find({ isActive: false })
            .sort({ order: 1, role: 1, name: 1 });
        res.json(alumni);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// @desc    Get single person by ID
// @route   GET /api/people/:id
// @access  Public
exports.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).json({ msg: 'Person not found' });
        }

        res.json(person);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Create a person (Admin Only)
// @route   POST /api/people
// @access  Private
exports.createPerson = async (req, res) => {
    const { name, role, email, imageUrl, bio, researchInterests, publications, linkedin, googleScholar, personalWebsite, isActive, order } = req.body;

    try {
        const newPerson = new Person({
            name,
            role,
            email,
            imageUrl,
            bio,
            researchInterests,
            publications,
            linkedin,
            googleScholar,
            personalWebsite,
            isActive,
            order
        });

        const person = await newPerson.save();
        res.status(201).json(person);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update a person (Admin Only)
// @route   PUT /api/people/:id
// @access  Private
exports.updatePerson = async (req, res) => {
    const { name, role, email, imageUrl, bio, researchInterests, publications, linkedin, googleScholar, personalWebsite, isActive, order } = req.body;

    // Build person object
    const personFields = {};
    if (name) personFields.name = name;
    if (role) personFields.role = role;
    if (email) personFields.email = email;
    if (imageUrl) personFields.imageUrl = imageUrl;
    if (bio) personFields.bio = bio;
    if (researchInterests) personFields.researchInterests = researchInterests;
    if (publications) personFields.publications = publications;
    if (linkedin) personFields.linkedin = linkedin;
    if (googleScholar) personFields.googleScholar = googleScholar;
    if (personalWebsite) personFields.personalWebsite = personalWebsite;
    if (isActive !== undefined) personFields.isActive = isActive;
    if (order !== undefined) personFields.order = order;

    try {
        let person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).json({ msg: 'Person not found' });
        }

        person = await Person.findByIdAndUpdate(
            req.params.id,
            { $set: personFields },
            { new: true }
        );

        res.json(person);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Delete a person (Admin Only)
// @route   DELETE /api/people/:id
// @access  Private
exports.deletePerson = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).json({ msg: 'Person not found' });
        }

        await Person.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Person removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};