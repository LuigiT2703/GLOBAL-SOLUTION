# OrbitAlert

Projeto acadêmico de Front-End para a Global Solution 2026 da FIAP. O OrbitAlert é uma plataforma web responsiva inspirada no projeto publicado no Lovable `spaceguard-ai-edge.lovable.app`, com foco em monitoramento ambiental por satélites, previsão por IA e alertas multicanal.

## Problema

Desastres naturais como enchentes, queimadas, secas, tempestades e deslizamentos podem evoluir rapidamente. A falta de informação antecipada dificulta a resposta de moradores, defesa civil e equipes de apoio.

## Solução proposta

A OrbitAlert simula uma Earth Intelligence Platform que usa dados orbitais e inteligência artificial para identificar riscos, acompanhar eventos em tempo real e enviar alertas por diferentes canais.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 responsivo com media queries
- JavaScript puro
- Imagens e ícones em `assets/`
- API pública Open-Meteo para previsão climática real

## Estrutura de pastas

```text
GLOBAL SOLUTION/
|-- assets/
|   |-- caua.jpg
|   |-- hero-earth.jpg
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

- `html/index.html`: página inicial com hero, cobertura de desastres, funcionamento e chamada final.
- `html/solucao-monitoramento.html`: painel de monitoramento com mapa orbital, alertas ativos e dados climáticos reais.
- `html/previsao.html`: simulador de previsão IA.
- `html/solucao-alertas.html`: canais de notificação e níveis de severidade.
- `html/sobre.html`: problema, proposta e tecnologias.
- `html/faq.html`: perguntas frequentes com acordeon.
- `html/integrantes.html`: integrantes com nome, RM, turma, GitHub, LinkedIn e foto.
- `html/contato.html`: formulário com validação JavaScript.

## Funcionalidades

- Menu responsivo com botão mobile.
- Links de navegação entre todas as páginas.
- JavaScript carregado no `<head>` com `defer`.
- Modal de detalhes nos alertas ativos.
- FAQ em acordeon.
- Formulário com validação e `preventDefault()`.
- Simulador de risco na página de previsão IA.
- Relógio e contadores operacionais atualizados em tempo real.
- Previsão real carregada pela API pública Open-Meteo.
- Cálculo de risco por localidade com temperatura, chuva, vento e umidade.
- Atualização automática dos dados climáticos a cada 10 minutos.
- CSS organizado em arquivos separados dentro de `css/`; o `main.css` importa os demais.
- JavaScript organizado em arquivos separados dentro de `js/`.

## Media queries

O arquivo `css/responsive.css` concentra as adaptações para telas grandes, tablets e celulares, com breakpoints em `1300px`, `980px`, `768px`, `620px` e `480px`.

## Dados em tempo real

O projeto usa a API pública Open-Meteo para buscar dados climáticos reais de Porto Alegre, Belém, Recife, Cuiabá e Petrolina. Indicadores como satélites ativos, eventos do dia e alertas críticos são demonstrativos, pois bases oficiais de focos de calor, deslizamentos e alertas institucionais normalmente exigem integração específica, permissão ou chave de API.

## Autores e créditos

| Nome | RM | Turma | Foto | GitHub | LinkedIn |
| --- | --- | --- | --- | --- | --- |
| Cauã De Souza | RM573349 | 1TDSPG | `assets/caua.jpg` | [cauadesouzavasconcellos-byte](https://github.com/cauadesouzavasconcellos-byte) | [LinkedIn](https://www.linkedin.com/in/cau%C3%A3-souza-b92261395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| Leonardo Bernard | RM570951 | 1TDSPG | `assets/leo.jpg` | [bernardleonardo](https://github.com/bernardleonardo) | [LinkedIn](https://www.linkedin.com/in/leonardo-de-souza-573306410?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| Luigi Tormim | RM572424 | 1TDSPG | `assets/luigi_perfil.png` | [LuigiT2703](https://github.com/LuigiT2703) | [LinkedIn](https://www.linkedin.com/in/luigi-tormim-b64738393?utm_source=share_via&utm_content=profile&utm_medium=member_ios) |
| Pedro Henrique | RM569497 | 1TDSPG | `assets/pedro.png` | [Pedro-H-Salvatore](https://github.com/Pedro-H-Salvatore) | [LinkedIn](https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/) |

## Imagens e ícones

- `assets/logo.svg`: logo do OrbitAlert.
- `assets/hero-earth.jpg`: imagem principal da página inicial.
- `assets/monitoring-map.jpg`: mapa orbital usado no monitoramento.
- `assets/caua.jpg`: foto de Cauã De Souza.
- `assets/leo.jpg`: foto de Leonardo Bernard.
- `assets/luigi_perfil.png`: foto de Luigi Tormim.
- `assets/pedro.png`: foto de Pedro Henrique.

## Link do repositório

```text
https://github.com/LuigiT2703/GLOBAL-SOLUTION
```

## Contato

```text
cauadesouzavasconcellos@gmail.com
```



