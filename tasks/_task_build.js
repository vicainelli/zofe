module.exports = function(grunt){
  grunt.registerTask('build', [
    'sass:dist',
    'jekyll:build'
  ]);
};
