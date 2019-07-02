module.exports = function(eleventyConfig) {
  return {
      templateFormats: [
          "md",
          "html",
          "json",
          "js",
          "css",
          "svg",
          "png",
          "jpg",
      ],
      passthroughFileCopy: true,
  };
};
