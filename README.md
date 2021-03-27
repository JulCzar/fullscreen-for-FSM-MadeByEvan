# Entendo a extensão

Essa é uma extensão com o proposito de adicionar a funcionalidade de expandir o canvas usado no projeto "Finite State Machine" do site MadeByEvan disponível [aqui](http://madebyevan.com/fsm/). É adicionado um botão à página que quando clicado expandirá alternará a visão entre tela cheia e exibição normal.

![sample](https://user-images.githubusercontent.com/54212199/112735890-712ce500-8f2d-11eb-8024-63a7540fea14.gif)

## Compatibilidade

A extensão é compatível com o navegador Google Chrome e todos os demais navegadores baseados no mesmo, tais como brave, edge entre outros.

## Instalação

Como a extensão não foi disponibilizada na loja de extensões da google, sua instalação é feita através do recurso para desenvolvedores testarem suas aplicações no navegador

para aqueles que não estão acostumados com a instalação de extensões em modo de desenvolvimento segue um tutórial genérico para instalação no chrome:

- clone o repositório num diretório de fácil acesso
- com o navegador aberto, digite na barra de endereços: chrome://extensions/
- a seguir no canto superior direito do navegador ative a opção "Modo de Programador" \(Developer Mode em inglês\).
![uma imagem que demonstra onde ativar o modo de desenvolvedor do navegador](https://user-images.githubusercontent.com/54212199/112735354-0f1eb080-8f2a-11eb-9865-1b80ff3f86cd.jpg)
- com o modo de desenvolvedor ativado, abra o diretório que contem o repositório clonado, selecione e arraste a pasta do diretório para o navegador com a tela de extensões aberta

A extensão deve ser carregada corretamente e já está funcionando, dá próxima vez que acessar o [Editor de maquinas de estados](http://madebyevan.com/fsm/) a extensão já irá carregar o botão na página com os devidos estilos aplicados.

## Considerações

A extensão faz com que o canvas do site fique do tamanho da tela usada, algo que foge ao planejado pelo criador da aplicação, logo a exportação de código para o LaTeX pode vazar da página, para corrigir esse problema, pode-se modificar a escala da marcação gerada para exportar o vetor ao LaTeX, a escala padrão é 0.2, para um monitor FullHD recomendo utilizar a escala 0.1, para demais resoluções recomendo ir realizando testes para encontrar a escala que melhor se adequa a resolução do seu monitor a folha A4 gerada no documento do LaTeX.
