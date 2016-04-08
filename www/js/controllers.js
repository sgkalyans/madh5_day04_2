angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {
    
    $scope.image = "img/eTRS6CN8SPOybzTJH9G9_placeholder.png";
    
    $scope.takePicture = function() {
        navigator.camera.getPicture(
            function(imageUrl) { //success
               $scope.$apply(function() {
                   $scope.image = imageUrl;
               }); 
            }, 
            function() { } //Failed
            
        )
    };
    $scope.share = function() {
        window.socialmessage.send({
            image: $scope.image
        });
    };
})
 