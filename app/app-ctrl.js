var annotations = ['$scope'];
function AppCtrl ($scope) {

	$scope.hello = 'World';
}

AppCtrl.$inject = annotations;

module.exports = AppCtrl;