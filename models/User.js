const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'You need to provide a username.',
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: 'You need to provide an email address.',
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    userCreated: {
        type: Date,
        default: Date.now,
        get: userCreatedVal => dateFormat(userCreatedVal)
    }
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// create the User Model using the Schema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;