
var appModule = angular.module('DealHistoryApp', []);

    appModule.constant('chunkSize', 50);

    appModule.controller('DealHistoryController', function($scope, chunkSize) {
        $scope.DealList = [];

        var currentIndex = 0;
        var todayDate = new Date();
        $scope.loadMoreRecords = function() {
            // Mocking Deal values 
            // In an real application, data would be retrieved from an
            // external system
            
            var Deal;
            var i = 0;
            while (i < chunkSize) {
                currentIndex++;
                var newDate = new Date();
                newDate.setDate(todayDate.getDate() - currentIndex);
                if (newDate.getDay() >= 1 && newDate.getDay() <= 5) {
                    Deal = {
                        dateValue: newDate,
                        limit: 20.0 + Math.random() * 10
                    };
                    $scope.DealList.push(Deal);
                    i++;
                }
            }
        };

        $scope.loadMoreRecords();
    });

   