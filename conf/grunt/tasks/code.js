module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'code', 'Compile src to build', function(){
        grunt.task.run( [
            'eslint'
        ] );
    } );
};
