# OrbitAlert

Projeto acadêmico de Front-End desenvolvido para a Global Solution 2026 da FIAP. O OrbitAlert é uma plataforma web responsiva inspirada no projeto publicado no Lovable `spaceguard-ai-edge.lovable.app`, com foco em monitoramento ambiental por satélites, previsão por IA e alertas multicanal para desastres naturais.

## Tema

**O Espaço e a Nova Fronteira**

## Problema

Desastres naturais como enchentes, queimadas, secas, tempestades e deslizamentos podem evoluir rapidamente. Muitas vezes, a informação chega tarde ou de forma fragmentada, dificultando a ação da população, da Defesa Civil e das equipes de apoio.

## Solução proposta

O OrbitAlert simula uma plataforma de inteligência ambiental que utiliza dados orbitais, indicadores climáticos e lógica preditiva para acompanhar áreas de risco, estimar a severidade de eventos e distribuir alertas por diferentes canais.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 responsivo com media queries
- JavaScript puro
- Imagens e ícones locais na pasta `assets/`
- API pública Open-Meteo para previsão climática real

## Observação sobre bibliotecas

O projeto não utiliza frameworks ou bibliotecas externas, como Bootstrap, Tailwind, jQuery, React, Vue ou Angular. Todo o front-end foi desenvolvido com HTML, CSS e JavaScript puro.

## Funcionalidades

- Menu de navegação responsivo.
- Página inicial com apresentação da solução.
- Monitoramento com mapa, alertas ativos e dados climáticos reais.
- Simulador de previsão de risco.
- Página de alertas multicanal.
- Página sobre o projeto.
- FAQ com acordeão.
- Formulário de contato com validação.
- Página de integrantes com fotos, RM, turma, GitHub e LinkedIn.
- Layout responsivo com media queries.
- JavaScript carregado no `<head>` com `defer`.
- Modal de detalhes nos alertas ativos.
- Relógio e contadores operacionais atualizados em tempo real.

## Estrutura de pastas

```text
GLOBAL SOLUTION/
|-- assets/
|   |-- caua.jpg
|   |-- hero-earth.jpg
|   |-- icon-alert.svg
|   |-- icon-health.svg
|   |-- icon-map.svg
|   |-- leo.jpg
|   |-- logo.svg
|   |-- luigi_perfil.png
|   |-- member-placeholder.svg
|   |-- monitoring-map.jpg
|   `-- pedro.png
|-- css/
|   |-- alertas.css
|   |-- button.css
|   |-- cards.css
|   |-- contato.css
|   |-- dashboard.css
|   |-- faq.css
|   |-- footer.css
|   |-- global.css
|   |-- index.css
|   |-- integrantes.css
|   |-- main.css
|   |-- modal.css
|   |-- nav.css
|   |-- previsao.css
|   `-- responsive.css
|-- html/
|   |-- contato.html
|   |-- faq.html
|   |-- index.html
|   |-- integrantes.html
|   |-- previsao.html
|   |-- sobre.html
|   |-- solucao-alertas.html
|   `-- solucao-monitoramento.html
|-- js/
|   |-- contador.js
|   |-- contato.js
|   |-- faq.js
|   |-- modal.js
|   |-- nav.js
|   `-- previsao.js
`-- README.MD
```

## Páginas do projeto

- `html/index.html`: página inicial do OrbitAlert.
- `html/solucao-monitoramento.html`: painel de monitoramento, mapa orbital, alertas ativos e dados climáticos reais.
- `html/previsao.html`: simulador de previsão de risco por IA.
- `html/solucao-alertas.html`: canais de alerta e níveis de severidade.
- `html/sobre.html`: explicação do problema, da solução e das tecnologias.
- `html/faq.html`: perguntas frequentes.
- `html/integrantes.html`: dados dos integrantes.
- `html/contato.html`: formulário de contato.

## Media queries

O arquivo `css/responsive.css` concentra as adaptações para telas grandes, tablets e celulares, com breakpoints em `1300px`, `980px`, `768px`, `620px` e `480px`.

## Dados em tempo real

O projeto usa a API pública Open-Meteo para buscar dados climáticos reais de Porto Alegre, Belém, Recife, Cuiabá e Petrolina. Indicadores como satélites ativos, eventos do dia e alertas críticos são demonstrativos, pois bases oficiais de focos de calor, deslizamentos e alertas institucionais normalmente exigem integração específica, permissão ou chave de API.

## Integrantes

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
| --- | --- | --- | --- | --- | --- |
| <img src="assets/caua.jpg" width="100"> | Cauã De Souza | RM573349 | 1TDSPG | [GitHub](https://github.com/cauadesouzavasconcellos-byte) | [LinkedIn](https://www.linkedin.com/in/cau%C3%A3-souza-b92261395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| <img src="assets/leo.jpg" width="100"> | Leonardo Bernard | RM570951 | 1TDSPG | [GitHub](https://github.com/bernardleonardo) | [LinkedIn](https://www.linkedin.com/in/leonardo-de-souza-573306410?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| <img src="assets/luigi_perfil.png" width="100"> | Luigi Tormim | RM572424 | 1TDSPG | [GitHub](https://github.com/LuigiT2703) | [LinkedIn](https://www.linkedin.com/in/luigi-tormim-b64738393?utm_source=share_via&utm_content=profile&utm_medium=member_ios) |
| <img src="assets/pedro.png" width="100"> | Pedro Henrique | RM569497 | 1TDSPG | [GitHub](https://github.com/Pedro-H-Salvatore) | [LinkedIn](https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/) |

## Imagens e ícones

- `assets/logo.svg`: logo do OrbitAlert.
- `assets/hero-earth.jpg`: imagem principal da página inicial.
- `assets/monitoring-map.jpg`: mapa orbital usado no monitoramento.
- `assets/caua.jpg`: foto de Cauã De Souza.
- `assets/leo.jpg`: foto de Leonardo Bernard.
- `assets/luigi_perfil.png`: foto de Luigi Tormim.
- `assets/pedro.png`: foto de Pedro Henrique.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Acesse o arquivo `html/index.html` pelo navegador.
4. Navegue pelas páginas usando o menu superior.

## Repositório

https://github.com/LuigiT2703/GLOBAL-SOLUTION

## Contato

cauadesouzavasconcellos@gmail.com
