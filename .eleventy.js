module.exports = (config) => {
  return {
      dir: {
          input: 'src',
          output: 'dist',
          layouts: 'layouts'
      },
      markdownTemplateEngine: 'njk'
  }
}