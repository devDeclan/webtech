const mongoose = require('mongoose');

const OrganiserSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contact: {
        type: Number,
        unique: true,
        required: true
    }
});
const Organiser = mongoose.model('Organiser', OrganiserSchema);

const EventSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    organiserID: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        min: 0
    }
});
const Event = mongoose.model('Event', EventSchema);

module.exports = {
    Organiser,
    Event
}