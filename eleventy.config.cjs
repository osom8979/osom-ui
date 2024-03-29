const Image = require('@11ty/eleventy-img');
const eleventyBundlerPlugin = require('@11ty/eleventy-plugin-bundle');
const eleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./tailwind.config');

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyBundlerPlugin);
  eleventyConfig.addPlugin(eleventyVitePlugin);

  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(tailwindConfig), autoprefixer()])
      .process(cssCode, {from: undefined})
      .then(
        result => done(null, result.css),
        reason => done(reason, null),
      );
  });

  eleventyConfig.addNunjucksAsyncShortcode('svgInline', async filename => {
    const metadata = await Image(`./src/_includes/assets/${filename}`, {
      formats: ['svg'],
      dryRun: true,
    });
    return metadata.svg[0].buffer.toString();
  });

  eleventyConfig.addWatchTarget('src/**/*.css');

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'pages',
    },
    pathPrefix: '/osom-ui/',
  };
};
