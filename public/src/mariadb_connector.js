import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "anthony",
  password: "28282455",
  database: "diary",
  connectionLimit: 5,
  port: 3333,
});

async function agregarContacto(name, number) {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      "INSERT INTO contacts (name, number) VALUES (?, ?)",
      [name, number]
    );
    return res;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

async function obtenerContactos() {
  let conn;
  let contacts;
  try {
    conn = await pool.getConnection();
    const query = "SELECT name, number FROM contacts";
    contacts = await conn.query(query);
    return contacts;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

export { agregarContacto, obtenerContactos };
