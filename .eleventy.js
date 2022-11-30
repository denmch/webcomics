module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: '_src',
            output: '_site'
        }
    };
};