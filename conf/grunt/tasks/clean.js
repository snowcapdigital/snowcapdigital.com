module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'clean', 'Wipe ./build', function(){
        grunt.file.delete( 'build/' );
    } );
};
