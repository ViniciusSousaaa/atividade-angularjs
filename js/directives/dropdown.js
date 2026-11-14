angular.module('dropdownModule', [])
  .directive('meuDropdown', ['$document', function ($document) {
    return {
      restrict: 'E',
      scope: {
        titulo: '@',
        opcoes: '='
      },
      template: `
        <div class="dropdown">
          <button ng-click="alternar()">{{ titulo }}</button>
          <ul class="dropdown-lista" ng-show="aberto">
            <li ng-repeat="opcao in opcoes" ng-click="selecionar(opcao)">
              {{ opcao.rotulo }}
            </li>
          </ul>
        </div>
      `,
      link: function (scope, element) {
        scope.aberto = false;

        scope.alternar = function () {
          scope.aberto = !scope.aberto;
        };

        scope.selecionar = function (opcao) {
          scope.aberto = false;
          opcao.acao();
        };

        function clicarFora(evento) {
          if (!element[0].contains(evento.target)) {
            scope.$apply(function () {
              scope.aberto = false;
            });
          }
        }

        $document.on('click', clicarFora);

        scope.$on('$destroy', function () {
          $document.off('click', clicarFora);
        });
      }
    };
  }]);