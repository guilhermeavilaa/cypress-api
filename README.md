# Desafio Automação API
## Descrição
Testes automatizado do desafio de automação API
## Passos para abrir no VS Code
1. Baixar o projeto
2. Abrir VS Code
3. Clicar em "File"
4. Clicar em "Open Folder"
5. Selecinar a pasta raiz do projeto
6. Clicar em "OK"
## Instruções
1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o projeto no repositório usando: `git clone git@github.com:guilhermeavilaa/cypress-api.git` (SSH) or `https://github.com/guilhermeavilaa/cypress-api.git` (HTTPS)
3. Com o terminal aberto no diretório raiz do projeto rodar os comandos `npm install` e `npx cypress open` para abrir o framework
4. Após a inicialização do Cypress selecionar e rodar de teste desejado que ele já irá executar todos os casos de teste.

Observações: Sugiro escolher o navegador 'Chrome' para execução dos testes.


## Estrutura de diretórios
```
/
├─ cypress/                        # Raiz do projeto onde se encontram os demais diretórios e testes
├─ ├─e2e/                          # Estrutura de diretórios que contém as estruturas dos testes automatizados
├─ ├─────features/                 # Contém os arquivos de funcionalidades com os cenários mapeados em BDDs dos testes
├─ ├─────pages/                    # Estrutura de page object do projeto contendo as respectivas páginas
├─ ├─────services/                 # Estruturas relacionadas as requisições de Apis
├─ ├─────step_definitions/         # Contém os Steps baseado em Gherkin dos testes
├─ node_modules                    # Coleção de funções
├─ .gitignore                      # Lista de arquivos e pastas ignoradas pelo git
├─ cypress.config.js               # Arquivo para config cypress
├─ package.json                    # Manifesto do projeto
└─ README.md                       # Esse arquivo
```
