angular.module('meuApp')
  .controller('MainController', ['$scope', '$interval', 'DadosService', 'ToastService',
    function ($scope, $interval, DadosService, ToastService) {

      $scope.faq = DadosService.getFaq();
      $scope.abas = DadosService.getAbas();

      $scope.porPagina = 3;
      $scope.paginaAtual = 1;
      $scope.totalPaginas = DadosService.getTotalPaginas($scope.porPagina);
      $scope.produtos = DadosService.getProdutosDaPagina(1, $scope.porPagina);

      $scope.mudarPagina = function (pagina) {
        $scope.paginaAtual = pagina;
        $scope.produtos = DadosService.getProdutosDaPagina(pagina, $scope.porPagina);
      };

      $scope.progresso = 0;
      var carregamento;

      $scope.iniciarUpload = function () {
        $interval.cancel(carregamento);
        $scope.progresso = 0;
        carregamento = $interval(function () {
          $scope.progresso += 10;
          $scope.verificarProgresso();
        }, 300);
      };

      $scope.verificarProgresso = function () {
        if ($scope.progresso >= 100) {
          $interval.cancel(carregamento);
          ToastService.mostrar('Upload concluído!', 'sucesso');
        }
      };

      $scope.idioma = 'Português';
      $scope.opcoesIdioma = DadosService.getIdiomas().map(function (nome) {
        return {
          rotulo: nome,
          acao: function () {
            $scope.idioma = nome;
            ToastService.mostrar('Idioma alterado para ' + nome, 'info');
          }
        };
      });

      $scope.salvar = function () {
        ToastService.mostrar('Dados salvos com sucesso!', 'sucesso');
      };

      $scope.salvarComErro = function () {
        ToastService.mostrar('Erro ao salvar os dados.', 'erro');
      };
    }
  ]);