import db from "@src/db";

/** get all the patient
 * @return {Array}
 */

const get = () => async (req, res) => {
  const patients = await db.patients.get();
  res.json({ patients });
};

export default get;
