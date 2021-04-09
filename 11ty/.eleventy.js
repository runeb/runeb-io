require("dotenv").config();
const { sanityClient } = require("./lib/sanityClient");
const imageUrlBuilder = require("@sanity/image-url");
const Prism = require("prismjs");
const {format, parseISO} = require("date-fns")

require("prismjs/components/prism-jsx")
require("prismjs/components/prism-typescript")

const blocksToHtml = require("@sanity/block-content-to-html");
const h = blocksToHtml.h;
const serializers = {
  types: {
    code: ({ node }) => {
      const { language, code } = node;
      const className = `language-${node.language}`;
      const innerHTML = Prism.highlight(
        node.code,
        Prism.languages[node.language]
      );

      return h("pre", { className }, h("code", { className }, { innerHTML }));
    },
  },
};

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

  eleventyConfig.addLiquidShortcode("portableText", (array = []) => {
    const result = blocksToHtml({
      //imageOptions: {w: 900, h: 240, fit: 'max'},
      blocks: array,
      serializers,
    });
    return result;
  });
  
  eleventyConfig.addLiquidShortcode("formatDate", (date) => {
    return format(parseISO(date), "dd MMM yyyy")
  })

  return {
    dir: {
      input: "views",
      output: "_site",
    },
  };
};
