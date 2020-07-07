const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: { type: String},
    postion: {type: String},
    office: {type: String},
    salary: {type:Number}
});

module.exports = {Employee};