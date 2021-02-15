require("dotenv").config();
const { sanityClient } = require("./lib/sanityClient");
const imageUrlBuilder = require("@sanity/image-url");
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addLiquidShortcode("sanityImg", function (img, width, height) {
    if (!img || !img.asset) return;
    return `<img src="${urlFor(img)
      .width(width)
      .height(height)
      .auto("format")}"`;
  });

  return {
    dir: {
      input: "views",
      output: "_site",
    },
  };
};
