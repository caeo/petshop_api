import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "postgres://postgres:77077csc@localhost:5432/Store",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
