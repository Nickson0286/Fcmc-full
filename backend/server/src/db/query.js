import pool from "./pool"

/**
 * send a query to the database
 * @param {String} str
 * @returns {Promise}
 */

const query = async str => await pool.query(str);

export default query