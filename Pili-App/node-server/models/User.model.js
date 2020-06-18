const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3, //6
        maxlength: 24,
        trim: true
        /* validate(value) {
            console.log
            const user = User.findOne({ username: value });
            if (user) {
                console.log("Here we are")
                throw new Error("This username already exists. Choose another one please.");
            }
        } */
    },
    password: {
        type: String,
        required: true,
        minlength: 3, //8
        maxlength: 24,
        trim: true
        /* validate(value){
            if (value.length < 8){
                throw new Error('Password must contain at least 8 characters.')
            }
        } */
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('This is not a valid email');
            }
        }
    },
    terminals: {
        type: [String]
    }
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user){
        throw new Error ('Unable to login.')
    }
    return user;
    //Aqui se debería hacer la validación de la contraseña contra el hash
}

const User = mongoose.model("User", userSchema);
module.exports = User;