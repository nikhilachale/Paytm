
const mongoose = require('mongoose');


// Database connection
mongoose.connect("mongodb+srv://nikhilachale:h5cEFEH1DBem4DLF@nikhillearn.8tlde.mongodb.net/")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        maxlength: 15
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 15
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// Account Schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// Models
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };