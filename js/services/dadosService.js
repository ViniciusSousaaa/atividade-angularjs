angular.module('dadosModule', [])
  .factory('DadosService', function () {

    var produtos = [
      { nome: 'Notebook',   preco: 3500 },
      { nome: 'Mouse',      preco: 80 },
      { nome: 'Teclado',    preco: 150 },
      { nome: 'Monitor',    preco: 900 },
      { nome: 'Headset',    preco: 250 },
      { nome: 'Webcam',     preco: 200 },
      { nome: 'Cadeira',    preco: 1200 },
      { nome: 'Mesa',       preco: 700 },
      { nome: 'Impressora', preco: 600 },
      { nome: 'Pendrive',   preco: 40 }
    ];

    var faq = [
      { titulo: 'Como faço um pedido?', conteudo: 'Escolha o produto, adicione ao carrinho e finalize a compra.' },
      { titulo: 'Qual o prazo de entrega?', conteudo: 'O prazo é de 5 a 10 dias úteis.' },
      { titulo: 'Posso trocar um produto?', conteudo: 'Sim, em até 7 dias após o recebimento.' }
    ];

    var abas = [
      { titulo: 'Perfil',        conteudo: 'Nome: Fulano de Tal. Email: fulano@email.com' },
      { titulo: 'Pedidos',       conteudo: 'Você possui 3 pedidos realizados.' },
      { titulo: 'Configurações', conteudo: 'Aqui você altera senha e preferências.' }
    ];

    var idiomas = ['Português', 'Inglês', 'Espanhol'];

    return {
      getFaq: function () {
        return faq;
      },
      getAbas: function () {
        return abas;
      },
      getIdiomas: function () {
        return idiomas;
      },
      getProdutosDaPagina: function (pagina, porPagina) {
        var inicio = (pagina - 1) * porPagina;
        return produtos.slice(inicio, inicio + porPagina);
      },
      getTotalPaginas: function (porPagina) {
        return Math.ceil(produtos.length / porPagina);
      }
    };
  });