import db from "..";

/**
 * get patient/s
 * @return {Promise}
 */

const get = async () => {
  const result = await db.query(`SELECT * FROM patients`);
  return result.rows;
};

export default get;
