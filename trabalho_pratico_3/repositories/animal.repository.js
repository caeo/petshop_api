import { connect } from "./db.js";

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animal WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimais() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animal");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimaisByProprietarioId(proprietario_id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM animal WHERE proprietario_id = $1",
      [proprietario_id]
    );
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  getAnimal,
  getAnimais,
  getAnimaisByProprietarioId,
};
