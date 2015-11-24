module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'build', 'Compile code', function(){
        grunt.task.run( [
            'style',
            'code',
            'assets'
        ] );
    } );
};
