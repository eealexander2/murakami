app.controller('HistoryCtrl', function($scope, $http, $stateParams){
  if (typeof($stateParams.userId) === 'undefined' ){
    userId = window.localStorage['authToken']
  }else{
    userId = $stateParams.userId
  }

  $http.get('https://tranquil-tundra-32569.herokuapp.com/users/' + userId + '/history').then(function(response){
    $scope.books = response.data.history_books
    if ($scope.books === null){
      $scope.message = "No Books in your History Yet! Add some!"
    }
  })
})
