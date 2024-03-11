import "dotenv/config";

const get = () => {
  if (!process.env.DATABESE_CONNECTION_STRING) {
    throw new Error("DATABESE_CONNECTION_STRING is not set");
  }

  return {
    database: {
      connectionString: process.env.DATABESE_CONNECTION_STRING,
    },
    http: {
      port: process.env.HTTP_PORT || 3000,
    },
  };
};

const settings = get();

export default settings;
