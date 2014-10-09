deskApp.factory('Filter', ['$resource', function($resource) {
    return $resource('/filters', '',
        {
            'all': {method: 'GET'}
        }
    );
}]);

deskApp.factory('AllLabels', ['$resource', function($resource) {
    return $resource('/labels', '',
        {
            'get_all_labels': {method: 'GET'}
        }
    );
}]);

deskApp.factory('AddLabel', ['$resource', function($resource) {
    return $resource('home/create_label', '',
        {
            'create': {method: 'POST'}
        }
    );
}]);

deskApp.factory('FilterCases', ['$resource', function($resource) {
    return $resource('/get_cases', '',
        {
            'get_cases': {method: 'GET'}
        }
    );
}]);

deskApp.factory('AssignLabel', ['$resource', function($resource) {
    return $resource('/assign_label', '',
        {
            'get_label_data': {method: 'GET'}
        }
    );
}]);

deskApp.factory('AssignCaseToLabel', ['$resource', function($resource) {
    return $resource('/home/update_case_label', '',
        {
            'update_case_label': {method: 'POST'}
        }
    );
}]);