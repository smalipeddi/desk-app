deskApp.controller('filtersController', ['$scope', 'Filter', '$location', function($scope, Filter, $location) {
    Filter.all({}, {}, function(response) {
        $scope.allFilters = response.filters;
    }, function() {
        alert("Sorry, something wen wrong.");
    });

    $scope.getFilterCases = function(filter_id){
        $location.path('/filter_cases/'+filter_id);
    };
}]);

deskApp.controller('filterCasesController', ['$scope', 'FilterCases', '$routeParams', function($scope, FilterCases, $routeParams) {
    FilterCases.get_cases({filter_id:$routeParams.filter_id}, {}, function(response) {
        $scope.cases = response.cases;
    }, function() {
        alert("Sorry, something wen wrong.");
    });
}]);

deskApp.controller('AllLabelsController', ['$scope', 'AllLabels', function($scope, AllLabels) {
    AllLabels.get_all_labels({}, {}, function(response) {
        $scope.allLabels = response.labels;

    }, function() {
        alert("Sorry, something wen wrong.");
    });
}]);

deskApp.controller('AssignLabelController', ['$scope', 'AssignLabel', '$location', 'AssignCaseToLabel', function($scope, AssignLabel, $location, AssignCaseToLabel) {
    AssignLabel.get_label_data({}, {}, function(response) {
        $scope.cases = response.cases;
        $scope.labels = response.labels;
    }, function() {
        alert("Sorry, something wen wrong.");
    });

    $scope.goToHomePage = function(){
        $location.path('/home')
    };

    $scope.assignLabel = function(){
        if($scope.selectedCase == null || $scope.selectedCase == undefined ||$scope.selectedLabel == null || $scope.selectedLabel == undefined ){
            return false;
        }
        AssignCaseToLabel.update_case_label({case:$scope.selectedCase, label:$scope.selectedLabel}, {}, function(response) {
            $location.path("/home") ;

        }, function() {
            alert("Sorry, something wen wrong.");
        });
    };
}]);

deskApp.controller('AddLabelController', ['$scope', '$location', 'AddLabel', function($scope, $location, AddLabel) {
    $scope.label = {};
    $scope.goToHomePage = function() {
        $location.path('/home');
    };

    $scope.addLabel = function() {
        if($scope.label.name == null || $scope.label.name == undefined){
            return false;
        }
        AddLabel.create({}, {name:$scope.label.name}, function(response) {
            if(response.is_any_error){
                alert("Please enter name.");
            }
            $location.path("/home") ;

        }, function() {
            alert("Sorry, something wen wrong.");
        });
    };
}]);

deskApp.controller('SideBarController', ['$scope', '$location', function($scope, $location) {
    $scope.loadFilters = function() {
        $location.path('/filters');
    };

    $scope.loadLabels = function() {
        $location.path('/all_labels');
    };

    $scope.loadNewLabel = function() {
        $location.path('/new_label');
    };

    $scope.assignLabel = function() {
        $location.path('/assign_label');
    };
}]);