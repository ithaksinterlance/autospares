require("@babel/register")({
  presets: [ "@babel/preset-react","@babel/preset-env"]
});
const router = require("./main").default();
const Sitemap = require("../").default();

function generateSitemap() {
  return (
  new Sitemap(router)
  .build("localhost:3000")
  .save("./sitemap.xml")
  );
}
generateSitemap();