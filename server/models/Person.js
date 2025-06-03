// server/models/Person.js
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    role: { // e.g., "Professor", "Ph.D. Student", "Research Assistant", "Alumni"
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    imageUrl: {
        type: String,
        trim: true,
        default: 'https://via.placeholder.com/150?text=No+Image',
    },
    bio: {
        type: String,
        trim: true,
    },
    researchInterests: {
        type: [String],
        default: []
    },
    publications: {
        type: [{
            title: String,
            link: String,
        }],
        default: []
    },
    linkedin: {
        type: String,
        trim: true,
    },
    googleScholar: {
        type: String,
        trim: true,
    },
    personalWebsite: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    order: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', PersonSchema);