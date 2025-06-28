module.exports = function(eleventyConfig) {
    
    eleventyConfig.ignores.add("customers/customer-template/");
    eleventyConfig.addPassthroughCopy('src/assets');
    
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "public"
        }
    };
}