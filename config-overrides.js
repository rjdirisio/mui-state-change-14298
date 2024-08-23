/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {
  fixBabelImports,
  override,
  addWebpackPlugin,
} = require("customize-cra");

module.exports = override(
  fixBabelImports("@mui/material", {
    libraryDirectory: "",
    camel2DashComponentName: false,
  }),
  fixBabelImports("@mui/icons-material", {
    libraryDirectory: "",
    camel2DashComponentName: false,
  }),
  addWebpackPlugin(new CleanWebpackPlugin()),
);
