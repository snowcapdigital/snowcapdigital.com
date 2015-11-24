module.exports = function( grunt ){
    'use strict';

    var _ = require( 'underscore' );

    grunt.registerTask( 'rename', 'Rename some files', function(){
        var buildScss = grunt.file.expandMapping(
            [ '**/pure.css' ],
            './',
            {
                'cwd': './',
                'ext': '.scss',
                'extDot': 'last'
            }
        );

        _( buildScss ).each( function( match ){
            grunt.file.copy( match.src, match.dest );
        } );
    } );
};
