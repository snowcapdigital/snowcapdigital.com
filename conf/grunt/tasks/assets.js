module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'assets', 'Move and configure static assets into build', function(){
        grunt.task.run( [
            'copy:images'
        ] );
    } );
};
