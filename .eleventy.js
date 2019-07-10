module.exports = function(eleventyConfig) {
  // Copy the `/images` directory
  eleventyConfig.addPassthroughCopy('images');

  // Manual passthrough template extensions
  return {
    templateFormats: ['md', 'html', 'yml', 'css', 'js', 'liquid'],
    passthroughFileCopy: true
  };

};
