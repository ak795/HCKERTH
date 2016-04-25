testApp.controller('displayController',function($scope,$routeParams,$http,$route)
{

  $scope.refresh = function(value)
  {
    $scope.$emit("read_flag",value);    // emits the value of flag to list.html
    $route.reload();
  }

  $scope.start = function(value)
  {
    if(value == 1)                    // send get request and fetch data for filters route
    {
       var str1 = config_ip;
       var str2 = "filters";
       var res = str1.concat(str2);     
       console.log($scope.level1);
       console.log($scope.level2);
       console.log($scope.rating1);
       var a,b;
       if($scope.level1==true)
       a = true;
       if($scope.level2==true)
       b = true; 


           var parameter = JSON.stringify({branding:a,setup_fee:b,rating:$scope.rating1
                                          });



            $http.post(res,parameter).success(function(data) {
            $scope.answer=data;
            console.log(data);
          });

    }
    else if(value == 2)
    {
       var str1 = config_ip;          // send get request and fetch data from getList route
       var str2 = "getList";
       var res = str1.concat(str2);     
       
            $http.get(res).success(function(data) {
            $scope.answer=data;
            console.log(data);
          });


    }

    else if(value == 3)
    {
        var str1 = config_ip ;      // send get request and fetch data from sort route
        var str2 = "sort" ;
        var res = str1.concat(str2) ;

            $http.get(res).success(function(data) {
            $scope.answer=data;
            console.log(data);
          });


    }
  }

});
