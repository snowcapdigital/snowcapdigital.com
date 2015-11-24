module.exports = function( grunt ){
    'use strict';

    var config = require( 'load-grunt-configs' )( grunt, {
        'config': {
            'src': 'conf/grunt/configurations/**/*.*'
        }
    } );

    require( 'load-grunt-tasks' )( grunt );
    grunt.initConfig( config );
    grunt.task.loadTasks( 'conf/grunt/tasks/' );
};
