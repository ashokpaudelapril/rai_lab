// server/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true,
    },
    fullDescription: {
        type: String,
        trim: true,
    },
    imageUrl: {
        type: String,
        trim: true,
        default: 'https://via.placeholder.com/400x250?text=No+Image',
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['Ongoing', 'Completed', 'Upcoming'],
        default: 'Ongoing',
    },
    teamMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }],
    publications: {
        type: [{
            title: String,
            link: String,
        }],
        default: []
    },
    githubLink: {
        type: String,
        trim: true,
    },
    demoLink: {
        type: String,
        trim: true,
    },
    tags: {
        type: [String],
        default: []
    },
    order: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);