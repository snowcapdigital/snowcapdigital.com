module.exports = function( grunt ){
    'use strict';

    grunt.registerTask( 'setup', [
        'prepare',
        'copy:vendor',
        'rename'
    ] );
};
