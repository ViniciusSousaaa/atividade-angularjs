angular.module('toastModule', [])
  .factory('ToastService', ['$timeout', function ($timeout) {

    var toasts = [];

    function fechar(toast) {
      var indice = toasts.indexOf(toast);
      if (indice !== -1) {
        toasts.splice(indice, 1);
      }
    }

    function mostrar(mensagem, tipo) {
      var toast = { mensagem: mensagem, tipo: tipo || 'info' };
      toasts.push(toast);
      $timeout(function () {
        fechar(toast);
      }, 3000);
    }

    return {
      getToasts: function () {
        return toasts;
      },
      mostrar: mostrar,
      fechar: fechar
    };
  }]);