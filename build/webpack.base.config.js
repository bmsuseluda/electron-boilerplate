const path = require("path");
const nodeExternals = require("webpack-node-externals");

const envName = (env) => {
  if (env.production) {
    return "production";
  }
  return "development";
};

const envToMode = (env) => {
  if (env.production) {
    return "production";
  }
  return "development";
};

module.exports = (env) => {
  return {
    target: "electron-renderer",
    mode: envToMode(env),
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${envName(env)}.json`),
      },
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
