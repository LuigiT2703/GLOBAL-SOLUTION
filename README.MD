# OrbitAlert

Projeto academico de Front-End para a Global Solution 2026 da FIAP. O OrbitAlert e uma plataforma web responsiva inspirada no projeto publicado no Lovable `spaceguard-ai-edge.lovable.app`, com foco em monitoramento ambiental por satelites, previsao por IA e alertas multicanal.

## Problema

Desastres naturais como enchentes, queimadas, secas, tempestades e deslizamentos podem evoluir rapidamente. A falta de informacao antecipada dificulta a resposta de moradores, defesa civil e equipes de apoio.

## Solucao proposta

A OrbitAlert simula uma Earth Intelligence Platform que usa dados orbitais e inteligencia artificial para identificar riscos, acompanhar eventos em tempo real e enviar alertas por diferentes canais.

## Tecnologias utilizadas

- HTML5 semantico
- CSS3 responsivo com media queries
- JavaScript puro
- Imagens e icones em `assets/`
- API publica Open-Meteo para previsao climatica real

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

## Paginas do projeto

- `html/index.html`: pagina inicial com hero, cobertura de desastres, funcionamento e chamada final.
- `html/solucao-monitoramento.html`: painel de monitoramento com mapa orbital, alertas ativos e dados climaticos reais.
- `html/previsao.html`: simulador de previsao IA.
- `html/solucao-alertas.html`: canais de notificacao e niveis de severidade.
- `html/sobre.html`: problema, proposta e tecnologias.
- `html/faq.html`: perguntas frequentes com acordeon.
- `html/integrantes.html`: integrantes com nome, RM, turma, GitHub, LinkedIn e foto.
- `html/contato.html`: formulario com validacao JavaScript.

## Funcionalidades

- Menu responsivo com botao mobile.
- Links de navegacao entre todas as paginas.
- JavaScript carregado no `<head>` com `defer`.
- Modal de detalhes nos alertas ativos.
- FAQ em acordeon.
- Formulario com validacao e `preventDefault()`.
- Simulador de risco na pagina de previsao IA.
- Relogio e contadores operacionais atualizados em tempo real.
- Previsao real carregada pela API publica Open-Meteo.
- Calculo de risco por localidade com temperatura, chuva, vento e umidade.
- Atualizacao automatica dos dados climaticos a cada 10 minutos.
- CSS organizado em arquivos separados dentro de `css/`; o `main.css` importa os demais.
- JavaScript organizado em arquivos separados dentro de `js/`.

## Media queries

O arquivo `css/responsive.css` concentra as adaptacoes para telas grandes, tablets e celulares, com breakpoints em `1300px`, `980px`, `768px`, `620px` e `480px`.

## Dados em tempo real

O projeto usa a API publica Open-Meteo para buscar dados climaticos reais de Porto Alegre, Belem, Recife, Cuiaba e Petrolina. Indicadores como satelites ativos, eventos do dia e alertas criticos sao demonstrativos, pois bases oficiais de focos de calor, deslizamentos e alertas institucionais normalmente exigem integracao especifica, permissao ou chave de API.

## Autores e creditos

| Nome | RM | Turma | Foto | GitHub | LinkedIn |
| --- | --- | --- | --- | --- | --- |
| Caua De Souza | RM573349 | 1TDSPG | `assets/caua.jpg` | [cauadesouzavasconcellos-byte](https://github.com/cauadesouzavasconcellos-byte) | [LinkedIn](https://www.linkedin.com/in/cau%C3%A3-souza-b92261395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| Leonardo Bernard | RM570951 | 1TDSPG | `assets/leo.jpg` | [bernardleonardo](https://github.com/bernardleonardo) | [LinkedIn](https://www.linkedin.com/in/leonardo-de-souza-573306410?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app) |
| Luigi Tormim | RM572424 | 1TDSPG | `assets/luigi_perfil.png` | [LuigiT2703](https://github.com/LuigiT2703) | [LinkedIn](https://www.linkedin.com/in/luigi-tormim-b64738393?utm_source=share_via&utm_content=profile&utm_medium=member_ios) |
| Pedro Henrique | RM569497 | 1TDSPG | `assets/pedro.png` | [Pedro-H-Salvatore](https://github.com/Pedro-H-Salvatore) | [LinkedIn](https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/) |

## Imagens e icones

- `assets/logo.svg`: logo do OrbitAlert.
- `assets/hero-earth.jpg`: imagem principal da pagina inicial.
- `assets/monitoring-map.jpg`: mapa orbital usado no monitoramento.
- `assets/caua.jpg`: foto de Caua De Souza.
- `assets/leo.jpg`: foto de Leonardo Bernard.
- `assets/luigi_perfil.png`: foto de Luigi Tormim.
- `assets/pedro.png`: foto de Pedro Henrique.

## Link do repositorio

```text
https://github.com/LuigiT2703/GLOBAL-SOLUTION
```

## Contato

```text
cauadesouzavasconcellos@gmail.com
```
