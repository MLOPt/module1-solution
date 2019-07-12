(function() {
	'use strict';
	//var lunchCheckModule = angular.module('LunchCheck', []);
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
			LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope){
			$scope.message='';
			$scope.lunchItems='';

			$scope.displayMessage = function (){
				$scope.message = displayMessage($scope.lunchItems);
			}

			function displayMessage(string){
				if(string.split(',').length > 3)
					return 'Too much!';
				else
					return 'Enjoy';
			}		
		}

})();


