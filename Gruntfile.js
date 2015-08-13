module.exports = function( grunt ){
    'use strict';

    var config = require( 'load-grunt-configs' )( grunt, {
        'config': {
            'src': 'conf/grunt/*.*'
        }
    } );

    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig( config );

    /** Custom Tasks **/
    grunt.registerTask( 'clean', 'Wipe ./build', function(){
        grunt.file.delete( 'build/' );
    } );

    grunt.registerTask( 'prepare', 'Prep directories for install', function(){
        grunt.task.run( [ 'clean' ] );
        grunt.file.mkdir( 'build/' );
    } );

    grunt.registerTask( 'build', 'Compile code', function(){
        grunt.task.run( [
            'style',
            'code',
            'assets'
        ] );
    } );

    grunt.registerTask( 'style', 'Compile Sass sheets', function(){
        grunt.task.run( [
            'sass:main',
            'cssmin'
        ] );
    } );

    grunt.registerTask( 'code', 'Compile src to build', function(){
        grunt.task.run( [
            'eslint'
        ] );
    } );

    grunt.registerTask( 'assets', 'Move and configure static assets into build', function(){
        grunt.task.run( [
            'copy:images'
        ] );
    } );

    grunt.registerTask( 'setup', [
        'prepare',
        'copy:vendor'
    ] );

    /** This is what will run if you don't give Grunt any directions **/
    grunt.registerTask( 'default', [ 'build' ] );
};
