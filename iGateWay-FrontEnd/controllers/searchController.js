 testApp.controller('searchController', function($scope,$routeParams,$http,$route){

 	 $scope.refresh1 = function(value)
  	{
	    $route.reload();			//refresh the value after every click
  	}

 	$scope.start = function(value)
  	{
  	   var str1 = config_ip;
       var str2 = "search";
       var res = str1.concat(str2);

        var parameter = JSON.stringify({  search:$scope.search_value });

         $http.post(res,parameter).success(function(data) {
         $scope.answer=data;
         console.log(data);
  			});

     }
});
