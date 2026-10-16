export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("dist");

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false,
    });

    eleventyConfig.addPassthroughCopy("src/assets");
};