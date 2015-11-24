module.exports = function( grunt ){
    'use strict';

    /** This is what will run if you don't give Grunt any directions **/
    grunt.registerTask( 'default', function(){
        var watch = grunt.option( 'watch' );
        var tasks = [ 'build' ];

        if( watch ){
            tasks.push( 'watch' );
        }

        grunt.task.run( tasks );
    } );
};
