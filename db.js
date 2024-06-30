const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://josearroyo4567:<password>@cluster0.3cybaws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB Atlas establecida');
  } catch (err) {
    console.error('Error en la conexión a MongoDB: ', err);
  }
};

module.exports = connectToDatabase;
