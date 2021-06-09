import "core-js/stable";
import "regenerator-runtime/runtime";
const env = require('@babel/preset-env');
const presetReact = require('@babel/preset-react');
require("@babel/register")({
  presets: [env, presetReact]
});
const router = require("./main").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router)
  .build("https://autobatteries.hakstime.com")
  .save("./sitemap.xml")
  );
}
generateSitemap();