angular.module('filtrosModule', [])
  .filter('reais', function () {
    return function (valor) {
      return 'R$ ' + Number(valor).toFixed(2).replace('.', ',');
    };
  });