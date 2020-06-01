angular.module("myapp", []).controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.users = [
      { name: "taguchi", score: 52.22 },
      { name: "tanaka", score: 38.22 },
      { name: "yamada", score: 11.11 },
      { name: "gorilla", score: 13.2 },
      { name: "tanar", score: 39.22 },
      { name: "yanka", score: 1.102 },
      { name: "hiho", score: 90.22 },
      { name: "ika", score: 11,22 },
      { name: "madao", score: 82.11 }
    ];
    $scope.today = new Date();
  },
]);
