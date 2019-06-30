module.exports = function(eleventyConfig) {
  return {
      templateFormats: [
          "md",
          "css",
          "svg",
          "png",
          "jpg",
      ],
      passthroughFileCopy: true,
  };
};
