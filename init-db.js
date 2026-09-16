const pool = require("./src/config/database");

async function createUsersTable() {
  try {
    console.log("Connecting to Google Cloud database to create tables...");
    
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await pool.query(queryText);
    console.log("Secure 'users' table created successfully in db_group8!");
  } catch (err) {
    console.error("Failed to create table:", err.message);
  } finally {
    await pool.end();
  }
}

createUsersTable();