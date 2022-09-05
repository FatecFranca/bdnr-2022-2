const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb+srv://fausto:<password>@cluster0.84ck8nb.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}