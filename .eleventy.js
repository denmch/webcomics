module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css");
    eleventyConfig.addPassthroughCopy("_src/img");
    eleventyConfig.addPassthroughCopy("**/comics");

    return {
        dir: {
            input: '_src',
            output: '_site'
        }
    };
};