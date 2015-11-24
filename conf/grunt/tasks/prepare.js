module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'prepare', 'Prep directories for install', function(){
        grunt.task.run( [ 'clean' ] );
        grunt.file.mkdir( 'build/' );
    } );
};
