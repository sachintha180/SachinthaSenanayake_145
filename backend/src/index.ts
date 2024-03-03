import express from "express";

const app = express();

const ENV_VARS = {
  port: process.env.port || 5000,
};

const main = async (connection_url: string) => {
  app.listen(ENV_VARS.port, () => {
    console.log("Server running at port:", ENV_VARS.port);
  });
};

main("test_url")