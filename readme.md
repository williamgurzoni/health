# Health

Aplicativo para Teste de Desenvolvimento

## Interface final:

<div>
  <img src="/samples/FlatList.gif" width="220px" title="FlatList" />
  <img hspace=20 src="/samples/Filtro.gif" width="220px" title="Filtro"/>
  <img src="/samples/Filtro2.gif" width="220px" title="Filtro"/> 
</div>

## Passos necessários para desenvolvimento:

1. Criar o aplicativo em React Native - react-native init health
2. Limpar código gerado e dividir visualmente a tela em componentes
3. Criar Header
4. Separar component do filtro
5. Criar component FlatList para os exercícios
6. Criar itens do FlatList e renderizar exemplo de dados / imagens
7. Criar elementos visuais do filtro
8. Simular recebimento dos dados (data.json) via promise / api
9. Reorganizar código e componentizar elementos criados
10. Fazer condições para exibição dos botões 'Hoje' e 'Ontem'
11. Fazer condições para exibição do tempo da atividade minutos / horas
12. Fazer controle do filtro funcionar
13. Fazer instalação da font Montserrat via RNPM
14. Ajustar style com nova fonte e ícones


## Passos para resolver os problemas encontrados:

1. Exibição dos exercícios:
  * Problema: Exibir uma lista de exercícios que podem ser filtrados
  * Solução: Utilizar uma FlatList com dados vindos do estado do aplicativo

2. Lista de itens (exercícios):
  * Problema: Exibir listas com borda arredondada
  * Solução: Utilizar a propriedade borderRadius

3. Degrade dos filtros:
  * Problema: Criar degrade
  * Solução: Utilização do pacote react-native-linear-gradient

  * Problema: O auto link do react-native-linear-gradient adicionou barras invertidas no settings.gradle, dando erro no build. Foi necessário acertar manualmente.

4. Receber os dados do Json e renderizar a interface:
  * Problema: Como tratar os dados?
  * Solução: Simular a requisição de uma API como Promise

5. Renderizar imagem com url dinâmica.
  * Problema: Segundo a documentação oficial do RN não é possível utilizar url dinâmica para o source da Image.
  * Solução: Realizada tratativa paliativa com switch case para utilizar os requires estáticos

  * Problema: A imagem bodybuilding.png estava com outro nome
  * Solução: Renomear a imagem

  * Problema: Imagens com tamanhos diferentes
  * Solução: Editar imagens para que fiquem com o tamanho padronizado

6. Filtro dos exercícios:
  * Problema: No arquivo data.json não existe relação entre os filtros e exercícios
  * Solução: criar novo campo no arquivo para relacionar os dados.

  * Problema: Item duplicado no filtro (YOGA)
  * Solução: Remover item duplicado

7. Realizar Uppercase na renderização:
  * Problema: Verificado bug no RN na estilização uppercase(https://github.com/facebook/react-native/issues/21966)
  * Solução: Utilizar workaround via javascript
