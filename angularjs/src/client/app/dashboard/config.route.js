(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);
     appRun.$inject = ['routehelper'];
    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'src/client/app/dashboard/dashboard.html'
                }
            }
        ];
    }
})();