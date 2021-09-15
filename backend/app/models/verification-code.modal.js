const mongoose = require('mongoose');

const schemaTypes = require('../constants/schemaTypes');
const dbConfig = require('../../config/database.config');

// for autoincrement
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(dbConfig.url);
autoIncrement.initialize(connection)

const verificationSchema = mongoose.Schema({
    verificationCode: {
        type : schemaTypes.NUMBER, 
        required: true, 
        min: [100000, "Should be atleast 6 digits long"],
        max: [999999, "Should not be longer than 6 digits"],
        validate: {
          validator: function(x) {
              const lastDigit = x % 10;
              return (lastDigit != 7);
          },
          message: "Last digit should not be 7."
        }
    },
}, {
    timestamps: true
});

verificationSchema.plugin(autoIncrement.plugin, 'VerificationSchema');
module.exports = connection.model('VerificationSchema', verificationSchema);
