angular.module('toastModule')
  .directive('meuToast', ['ToastService', function (ToastService) {
    return {
      restrict: 'E',
      scope: {},
      template: `
        <div class="toast-container">
          <div class="toast" ng-repeat="toast in toasts" ng-class="toast.tipo">
            <span>{{ toast.mensagem }}</span>
            <button ng-click="fechar(toast)">X</button>
          </div>
        </div>
      `,
      link: function (scope) {
        scope.toasts = ToastService.getToasts();

        scope.fechar = function (toast) {
          ToastService.fechar(toast);
        };
      }
    };
  }]);