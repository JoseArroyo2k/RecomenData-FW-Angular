const User = require('../models/User');

exports.loginUser = async (req, res) => {
  const { Usuario, Contrasena } = req.body;

  try {
    const user = await User.findOne({ Usuario, Contrasena });

    if (user) {
      res.json({
        _id: user._id,
        Usuario: user.Usuario,
        message: 'Login successful',
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
