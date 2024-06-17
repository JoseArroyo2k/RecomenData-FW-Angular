const mongoose = require('mongoose');
const User = require('./models/Users');
const fs = require('fs');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://dataesan:dataesan@cluster0.3cybaws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Conexión a MongoDB Atlas establecida');
  } catch (err) {
    console.error('Error en la conexión a MongoDB: ', err);
  }
};

const importUsers = async () => {
  try {
    await connectToDatabase();
    let users = JSON.parse(fs.readFileSync('C:/Users/José Arroyo/Desktop/SCRIPTS PRUEBAS/docjson.json', 'utf-8'));

    // Filtrar usuarios con campo 'Usuario' nulo o duplicado
    users = users.filter(user => user.Usuario && user.Contrasena);

    // Revisar si hay duplicados en 'Usuario'
    const usernames = new Set();
    users = users.filter(user => {
      if (usernames.has(user.Usuario)) {
        return false;
      } else {
        usernames.add(user.Usuario);
        return true;
      }
    });

    // Verificar si hay duplicados en la base de datos antes de insertar
    const existingUsers = await User.find({ Usuario: { $in: users.map(u => u.Usuario) } });
    const existingUsernames = new Set(existingUsers.map(u => u.Usuario));
    users = users.filter(user => !existingUsernames.has(user.Usuario));

    if (users.length > 0) {
      await User.insertMany(users);
      console.log('Usuarios importados correctamente');
    } else {
      console.log('No hay usuarios nuevos para importar');
    }

    mongoose.connection.close();
  } catch (err) {
    console.error('Error al importar usuarios: ', err);
  }
};

importUsers();
