(function() {
    var module = angular.module('app.test',[]);
    module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
	        .state('mytest', {
	            url: '/teste',
	            templateUrl: 'contracts/test.html',
	            controller: 'viewTest'
	        })

    });

    // 'contracts' state controller function
    module.controller('viewTest', function($scope,$window, $http, $stateParams, Contract, $state) {
    	//TODO: do some of this with configHeader:
    	$scope.app.configHeader({back: false, title: 'Test'});
        $scope.test="Bonjour ibrahim";
        $scope.contracts=Contract.query()

        $scope.pdfMake = $window.pdfMake;

        $scope.modify = function(){
        console.log("test");

            var pdfMake = $scope.pdfMake;

            var teste=$scope.test;
           var docDefinition = {
                                  content: [
                                    { text: "Contrat d'echange", style: 'header' },
                                    {text:"1 . PREAMBULE :",style:'title'},
                                   "Le contrat d’échange des Objects est à but non lucratif. Il n’y a aucun échange d’argent entre les parties, chacune de celles-ci cédant à l’autre son Object définit ci-dessous à titre gratuit et définitivement." ,
                                     {text:" 2 . CONTRAT D’ECHANGE ENTRE :",style:'title'},

                                  ],

                                  styles: {
                                 	header: {
                                 			fontSize: 18,
                                 			bold: true,
                                 			margin: [200, 0, 0, 50]
                                 		},
                                 		title: {
                                           fontSize: 14,
                                           bold: true,
                                           margin: [10, 20, 0, 20]
                                                 },
                                  }
                                };
           pdfMake.createPdf(docDefinition).open();
            //   pdfMake.createPdf(docDefinition).download('optionalName.pdf');

        	  };
    });

})();