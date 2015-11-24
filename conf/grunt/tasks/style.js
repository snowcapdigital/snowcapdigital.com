module.exports = function( grunt ){
    'use strict';
    grunt.registerTask( 'style', 'Compile Sass sheets', function(){
        grunt.task.run( [
            'sass:main',
            'cssmin'
        ] );
    } );
};
