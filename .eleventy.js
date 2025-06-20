module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/default-style.css');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}