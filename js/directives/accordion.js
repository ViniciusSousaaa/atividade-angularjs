angular.module('accordionModule', [])
  .directive('meuAccordion', function () {
    return {
      restrict: 'E',
      scope: {
        itens: '='
      },
      template: `
        <div class="accordion">
          <div class="accordion-item" ng-repeat="item in itens">
            <button class="accordion-titulo" ng-click="alternar($index)">
              {{ item.titulo }}
            </button>
            <div class="accordion-conteudo" ng-class="{ aberto: itemAberto === $index }">
              <p>{{ item.conteudo }}</p>
            </div>
          </div>
        </div>
      `,
      link: function (scope) {
        scope.itemAberto = null;

        scope.alternar = function (indice) {
          if (scope.itemAberto === indice) {
            scope.itemAberto = null;
          } else {
            scope.itemAberto = indice;
          }
        };
      }
    };
  });