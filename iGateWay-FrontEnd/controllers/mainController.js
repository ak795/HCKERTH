
	// create the controller and inject Angular's $scope
	testApp.controller('mainController', function($scope,$http,$routeParams,$route,$rootScope) {

    $scope.flag;    //flag to activate various onclick actions

    $rootScope.$on("read_flag",function(e,value){
        $scope.flag = value;
        console.log(value) ;
    });

	$scope.get_count = function()
    {
    var str3 = config_ip;
    var str4 = "getCount";
    var res2 = str3.concat(str4);
    $http.get(res2).success(function(data){
     $scope.count_value=data.Data_Count;
     console.log($scope.count_value);
    });

    }

	});
