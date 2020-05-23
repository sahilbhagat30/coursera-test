(function(){

    angular.module('LunchCheck',[])
           .controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.array= [];
  $scope.number = 0;
  $scope.msg = "";
  $scope.logId = function() {
       //console.log($scope.id);
       if ($scope.id == "" || $scope.id == "," || $scope.id == " " || $scope.id === undefined){
         //console.log("Please enter data first");
         $scope.msg = "Please enter data first";
       }
       else {
         //$scope.array = $scope.id.split(',');
          //console.log($scope.array);

          //$scope.number = $scope.array.length;
          //console.log($scope.number);

       $scope.array = filter_array($scope.id.split(','))
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
       console.log($scope.array);
          if ($scope.array.length == 0)
          {
            $scope.msg = "Please enter data first";

          }
        else if ($scope.array.length>3)
          {
            //console.log("Too Much!");
            $scope.msg = "Too Much!";
          }
          else {
            //console.log("Enjoy!");
            $scope.msg = "Enjoy!";
          }
       }

   }
}

})();
