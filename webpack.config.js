const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = [
  "/",
  "/solite-battery/",
  "/varta-battery/",
  "/amaron-battery/",
  "/acdelco-battery/",
  "/car-battery-brands/",
  "/car-battery-replacement/",
  "/become-a-partner/",
  "/contact/",
  "/post/",
  "/post/how_to_maintain_your_car_battery/",
  "/post/how_to_know_if_your_car_battery_is_dying/",
  "/post/tip_to_sanitize_your_car_during_covid_19/",
  "/post/all_you_need_to_know_about_car_battery/",
  "/post/top_4_battery_for_your_car/",
  "/how_to_maintain_your_car_battery/",
  "/how_to_know_if_your_car_battery_is_dying/",
  "/tips_to_sanitize_your_car_during_covid_19/",
  "/all_you_need_to_know_about_car_battery/",
  "/top_4_battery_for_your_car/",
  "/car_battery_replacement_sharjah/",
];
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    historyApiFallback: true,
    hot:true,
    contentBase: path.join(__dirname, './dist'),
    open: true,
    publicPath: "/"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js", ".jsx", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new SitemapPlugin({
      base: "https://autobatteries.hakstime.com",
      paths,
      options: {
        filename: "sitemap.xml",
      },
    }),
  ],
};
