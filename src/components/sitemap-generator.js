import {Sitemap} from "react-router-sitemap";
import "@babel/register";
import router from "./main.js";
const route = router.default;

(
    new Sitemap(route)
        .build('https://autobatteries.hakstime.com')
        .save('./sitemap.xml')
);