angular.module('progressBarModule', [])
  .directive('minhaBarraProgresso', function () {
    return {
      restrict: 'E',
      scope: {
        valor: '='
      },
      template: `
        <div class="barra-progresso">
          <div class="barra-preenchimento" ng-style="{ width: valor + '%' }"></div>
        </div>
        <p>{{ valor }}%</p>
      `
    };
  });