module.exports = {
  STATIC_HOST: process.env.STATIC_SERVER_HOST || '0.0.0.0',
  STATIC_PORT: process.env.STATIC_SERVER_PORT || 8000,
  PATHS: {
    CSS: './src/stylesheets/',
    CSS_MINIFIED_OUT: 'style.min.css',
    DEST: 'dist'
  },
  TASKS: [
    'sass',
    'watch',
    'servestatic',
    'html'
  ]
};
