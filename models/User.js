const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ID_Cliente: { type: Number, required: true, unique: true },
  Usuario: { type: String, required: true, unique: true },
  Contrasena: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
