const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = () => {

    //configuration in development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dbDavid",
        mongodb_password: "8JAyZFG2KaJtvtTX",
        mongodb_clustername: "atlascluster",
        mongodb_database: "my-site-dev",
      },
    };
  }

  //configuration in everything else
  return {
    env: {
      mongodb_username: "dbDavid",
      mongodb_password: "8JAyZFG2KaJtvtTX",
      mongodb_clustername: "atlascluster",
      mongodb_database: "my-site",
    },
  };
};
