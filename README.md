# Atividade AngularJS

Aplicação web responsiva desenvolvida com AngularJS, com seis componentes visuais implementados como diretivas.

## Componentes

| Componente | Diretiva | Exemplo de uso |
|---|---|---|
| Acordeão | `meu-accordion` | Perguntas frequentes |
| Paginação | `minha-paginacao` | Listagem de produtos |
| Barra de Progresso | `minha-barra-progresso` | Upload de arquivo |
| Abas | `minhas-abas` | Perfil do usuário |
| Menu Suspenso | `meu-dropdown` | Seleção de idioma |
| Notificação Toast | `meu-toast` | Sucesso e erro ao salvar |

## Conceitos utilizados

- Módulo principal (`app.js`) integrando módulos independentes
- Diretivas e controller
- `$scope` e `ng-model` (two-way data binding)
- Factory e serviço (`DadosService`, `ToastService`)
- Filtro personalizado (`reais`)
- Eventos com `ng-click` e `ng-change`

## Estrutura

```
├── index.html
├── css/style.css
└── js/
    ├── app.js
    ├── controllers/mainController.js
    ├── directives/
    ├── filters/filtros.js
    └── services/
```

## Como executar

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`.

## Autor

Vinicius Sousa - Tópicos Avançados em Programação