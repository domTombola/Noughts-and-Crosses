(function () {
    'use strict';
    module.exports = {
        less: {
            files: ['main-app/app/less/*.less'],
            tasks: ['lessFiles']
        },
        javascript: {
            files: ['main-app/app/scripts/*.js'],
            tasks: ['jsFiles']
        }
    };
})();