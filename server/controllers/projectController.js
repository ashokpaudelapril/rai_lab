// server/controllers/projectController.js
const Project = require('../models/Project');
const Person = require('../models/Person');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({})
            .populate('teamMembers', 'name imageUrl role')
            .sort({ order: 1, startDate: -1 });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
            .populate('teamMembers', 'name imageUrl role email linkedin');

        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        res.json(project);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Create a project (Admin Only)
// @route   POST /api/projects
// @access  Private
exports.createProject = async (req, res) => {
    const { title, shortDescription, fullDescription, imageUrl, startDate, endDate, status, teamMembers, publications, githubLink, demoLink, tags, order } = req.body;

    try {
        const newProject = new Project({
            title,
            shortDescription,
            fullDescription,
            imageUrl,
            startDate,
            endDate,
            status,
            teamMembers,
            publications,
            githubLink,
            demoLink,
            tags,
            order
        });

        const project = await newProject.save();
        res.status(201).json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update a project (Admin Only)
// @route   PUT /api/projects/:id
// @access  Private
exports.updateProject = async (req, res) => {
    const { title, shortDescription, fullDescription, imageUrl, startDate, endDate, status, teamMembers, publications, githubLink, demoLink, tags, order } = req.body;

    const projectFields = {};
    if (title) projectFields.title = title;
    if (shortDescription) projectFields.shortDescription = shortDescription;
    if (fullDescription) projectFields.fullDescription = fullDescription;
    if (imageUrl) projectFields.imageUrl = imageUrl;
    if (startDate) projectFields.startDate = startDate;
    if (endDate) projectFields.endDate = endDate;
    if (status) projectFields.status = status;
    if (teamMembers) projectFields.teamMembers = teamMembers;
    if (publications) projectFields.publications = publications;
    if (githubLink) projectFields.githubLink = githubLink;
    if (demoLink) projectFields.demoLink = demoLink;
    if (tags) projectFields.tags = tags;
    if (order !== undefined) projectFields.order = order;

    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        project = await Project.findByIdAndUpdate(
            req.params.id,
            { $set: projectFields },
            { new: true }
        );

        res.json(project);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Delete a project (Admin Only)
// @route   DELETE /api/projects/:id
// @access  Private
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        await Project.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid ID format' });
        }
        res.status(500).send('Server Error');
    }
};