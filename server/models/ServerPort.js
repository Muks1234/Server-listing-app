var mongoose = require('mongoose');

var ServerPort = mongoose.Schema({
    name: {type: String},
    port: String
}, {
    collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort)