import mysql from "mysql";

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "anthony",
  password: "28282455",
  database: "agenda",
});

const Connection = () => {
  mysqlConnection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado a la base de datos");
  });
};

const agregarContacto = (name, number) => {
  const query = `INSERT INTO contacts (id, name, number) VALUES (${null}, "${name}", ${number})`;
  mysqlConnection.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
};

let contactos;
const obtenerContactos = () => {
  const query = "SELECT * FROM contacts";
  mysqlConnection.query(query, (err, result) => {
    if (err) throw err;
    contactos = result;
  });
  return contactos;
};

// exporting module to index.js
export { Connection, agregarContacto, obtenerContactos };