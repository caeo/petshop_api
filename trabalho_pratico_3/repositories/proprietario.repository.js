import { connect } from "./db.js";

async function insertProprietario(proprietario) {
  const conn = await connect();

  try {
    const sql = "INSERT INTO proprietario(nome, telefone) VALUES($1, $2)";
    const values = [proprietario.nome, proprietario.telefone];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getProprietarios() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM proprietario ");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getProprietario(id) {
  try {
    const res = await conn.query(
      "SELECT * FROM proprietario WHERE proprietario_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}
