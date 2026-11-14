angular.module('paginationModule', [])
  .directive('minhaPaginacao', function () {
    return {
      restrict: 'E',
      scope: {
        totalPaginas: '=',
        paginaAtual: '=',
        aoMudar: '&'
      },
      template: `
        <div class="paginacao">
          <button ng-click="irPara(paginaAtual - 1)" ng-disabled="paginaAtual === 1">
            Anterior
          </button>
          <button ng-repeat="pagina in paginas()"
                  ng-click="irPara(pagina)"
                  ng-class="{ ativa: pagina === paginaAtual }">
            {{ pagina }}
          </button>
          <button ng-click="irPara(paginaAtual + 1)" ng-disabled="paginaAtual === totalPaginas">
            Próxima
          </button>
          <p>Página {{ paginaAtual }} de {{ totalPaginas }}</p>
        </div>
      `,
      link: function (scope) {
        scope.paginas = function () {
          var lista = [];
          for (var i = 1; i <= scope.totalPaginas; i++) {
            lista.push(i);
          }
          return lista;
        };

        scope.irPara = function (pagina) {
          scope.aoMudar({ pagina: pagina });
        };
      }
    };
  });