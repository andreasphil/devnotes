import markdownIt from "markdown-it";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("vendor");

  eleventyConfig.addWatchTarget("**/*.{js,css}");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("notes/draft_*");
  eleventyConfig.ignores.add("vendor");

  /** @type {import("markdown-it").Options} */
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownOptions));
}
