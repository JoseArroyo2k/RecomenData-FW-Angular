const sql = require('mssql');

const config = {
  user: '', // Deja vacío para usar autenticación de Windows
  password: '', // Deja vacío para usar autenticación de Windows
  server: 'DESKTOP-I4S1736', // Tu servidor SQL
  database: 'Recomendata PM', // Tu base de datos
  options: {
    trustedConnection: true, // Usar autenticación de Windows
    enableArithAbort: true,
    encrypt: false, // Cambiar a true si usas SSL
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Conexión a la base de datos establecida');
  } catch (err) {
    console.error('Error en la conexión a la base de datos: ', err);
  }
}

module.exports = { sql, connectToDatabase };
