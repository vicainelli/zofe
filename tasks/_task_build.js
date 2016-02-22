module.exports = function(grunt){
  grunt.registerTask('build', [
    'sass:dev',
    'jekyll:build'
  ]);
};
