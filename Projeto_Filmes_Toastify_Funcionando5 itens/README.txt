PROJETO FILMES - VERSÃO CORRIGIDA

COMO EXECUTAR

1. Abra a pasta no VS Code.
2. Execute:

npm install

3. Depois:

npm run dev

CORREÇÃO DO ERRO filmes.filter is not a function

Esta versão NÃO usa a chave antiga "filmes" do localStorage.
Ela usa:

projeto-filmes-toastify-v2

Além disso, os dados carregados são validados com Array.isArray().
Se o localStorage estiver inválido, o projeto volta automaticamente
para os filmes padrão em vez de quebrar a aplicação.

REACT-TOASTIFY

A versão usada é 11.1.0.

Os toasts aparecem para:
- título vazio
- gênero vazio
- filme adicionado
- filme marcado como assistido
