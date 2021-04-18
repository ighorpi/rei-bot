const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    userId: { type: String, require: true, validate: [
        {
            validator: async (value) => {
                let user = await User.find({userId: value})
                return user.length == 0
            },
            message: 'Usuario já existe.'
        }
    ]},
    userBalance: { type: Number, default: 0 },
    isLogged: { type: Boolean , default: true },
    joinedAt:   { type: Date,    default: Date.now },
    level: { type: Number, default: 0 }
})


const User = mongoose.model('User', userSchema)