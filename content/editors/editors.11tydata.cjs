module.exports = {
  layout: "layouts/editor.njk",
  eleventyComputed: {
    key: (data) => data?.page?.fileSlug || data?.key,
    title: (data) => data?.title || data?.name || data?.page?.fileSlug,
    permalink: (data) => `/editors/${data?.page?.fileSlug || data?.key}/`,
  },
};
