const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://mongojt:+M0ng0db@mongodb.uhserver.com:27017/mongojt')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."