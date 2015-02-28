(function() {

    var memebers = [{
        name: 'Me',
        avatar: 'assets/img/avatar1.png'
    },
    {
        name: 'Aslam',
        avatar: 'assets/img/avatar1.png'
    }, {
        name: 'Seb',
        avatar: 'assets/img/avatar2.png'
    }, {
        name: 'Ibru',
        avatar: 'assets/img/avatar3.png'
    }];

    var app = angular.module('myapp', []);


    app.controller('discussion',function(){


    	})
    	.controller('teamMember', ['$scope', function($scope) {
            $scope.team = memebers;

        }]).directive('header', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/views/header.html'
            };
        })
        .directive("footer", function() {
            return {
                restrict: 'E',
                templateUrl: 'app/views/footer.html'
            };
        });
})();