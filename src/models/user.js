const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      mobileNo: {
        type: String,
        required: true,
      },
},{
    timestamps: true,
});
module.exports = UserModel = mongoose.model('user', schema);
