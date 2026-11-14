angular.module('tabsModule', [])
  .directive('minhasAbas', function () {
    return {
      restrict: 'E',
      scope: {
        abas: '='
      },
      template: `
        <div class="abas">
          <div class="abas-titulos">
            <button ng-repeat="aba in abas"
                    ng-click="selecionar($index)"
                    ng-class="{ ativa: abaAtiva === $index }">
              {{ aba.titulo }}
            </button>
          </div>
          <div class="abas-conteudo">
            <p>{{ abas[abaAtiva].conteudo }}</p>
          </div>
        </div>
      `,
      link: function (scope) {
        scope.abaAtiva = 0;

        scope.selecionar = function (indice) {
          scope.abaAtiva = indice;
        };
      }
    };
  });