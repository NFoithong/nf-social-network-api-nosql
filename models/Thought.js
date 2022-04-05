const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Please type something',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'You need to provide a username.',
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
}, {
    toJSON: {
        getters: true
    },
    id: false
});


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'You need to provide a username.',
        ref: 'User'
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// create the User Model using the Schema
const Thought = model('Thought', ThoughtSchema);

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    if (this.reactions) { return this.reactions.length } else { return 0 }
});

module.exports = Thought;