const sql = require("mssql");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

class querys {
  async test() {
    try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect(sqlConfig);
      const result = await sql.query`SELECT * FROM Feature_Requsts`;
      console.dir(result);
      return result;
    } catch (err) {
      // ... error checks
      console.log(err);
    }
  }
}

export default new querys();
