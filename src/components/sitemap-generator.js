import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import routes from './main';
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object

// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'http://localhost:3000';

// define our destination folder and sitemap file name
const dest = path.resolve('/build/', 'sitemap.xml');

// Generate sitemap and return Sitemap instance
const sitemap = buildSitemap(hostname, routes);
fs.writeFileSync(dest, sitemap.toString())