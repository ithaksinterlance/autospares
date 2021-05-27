require('@babel/register');
const router = require('./main').default;
const Sitemap = require('react-router-sitemap').default;
(
    new Sitemap(router)
        .build('https://autobatteries.hakstime.com')
        .save('./sitemap.xml')
);


