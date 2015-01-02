module.exports = function(grunt){
  grunt.config('shell', {
    jekyll: {
      command: "jekyll serve",
      options: {
        stderr: false
      }
    }
  });
};
