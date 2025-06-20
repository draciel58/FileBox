const pool = require('../config/db.js');

function formatWhereClause(obj) {
  return Object.keys(obj).map(key => `${key} = ?`).join(' AND ');
}

async function insertOne(table, data) {
  const keys = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map(() => '?').join(', ');
  const values = Object.values(data);
  const query = `INSERT INTO ${table} (${keys}) VALUES (${placeholders})`;
  await pool.execute(query, values);
}

async function getAll(table) {
  const query = `SELECT * FROM ${table}`;
  const rows = await pool.promise().query(query);
  if (rows && rows[0]) {
    return rows[0];
  }
  return [];
}

async function getWhere(table, where) {
  const clause = formatWhereClause(where);
  const values = Object.values(where);
  const query = `SELECT * FROM ${table} WHERE ${clause}`;
  const [rows] = pool.execute(query, values);
  return rows;
}

module.exports = {
  insertOne,
  getAll,
  getWhere,
};
