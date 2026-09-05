# Beatriz ou Vinicius? 💗💙

Site estático da revelação do bebê de Caio e Thais. HTML, CSS e JavaScript executados inteiramente no navegador, com imagem local. Sem backend, banco de dados, instalação, dependências externas ou etapa de build.

## Publicar no GitHub Pages

1. Crie um repositório público, por exemplo `beatriz-ou-vinicius`.
2. Extraia este ZIP. Envie os arquivos extraídos para a raiz do repositório (não envie apenas o ZIP ou uma pasta contendo o projeto). O `index.html` deve aparecer diretamente na raiz.
3. Confirme o envio na branch `main`.
4. Abra **Settings → Pages**.
5. Em **Build and deployment**, selecione **Source → Deploy from a branch**.
6. Selecione a branch **main** e a pasta **/(root)**. Clique em **Save**.
7. Aguarde a publicação. O endereço será exibido em **Settings → Pages** e poderá ser compartilhado com a família.

Referência oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `index.html` | Página principal, textos e estrutura |
| `style.css` | Layout responsivo, cores e animações |
| `countdown.js` | Fuso horário, data e cálculo real do tempo restante |
| `app.js` | Atualização do contador, mensagens, progresso e comemoração |
| `nursery.webp` | Ilustração do ursinho, incluída no projeto |
| `.nojekyll` | Dispensa o processamento Jekyll no GitHub Pages |
| `README.md` | Estas instruções |

Todos os caminhos são relativos: o site funciona também dentro do caminho de um repositório de projeto no GitHub Pages. Não é necessário domínio próprio.

## Abrir no computador

Abra `index.html` no navegador mantendo os outros arquivos na mesma pasta. O contador e a ilustração funcionam localmente, sem servidor.

## Data e funcionamento

- Revelação: **08/09/2026 às 10:00:00**.
- Fuso explícito: **America/Sao_Paulo**.
- Instante correspondente: **2026-09-08T13:00:00.000Z**.
- O cálculo usa `Intl.DateTimeFormat` para resolver a data em São Paulo e `Date.now()` para obter o horário do dispositivo. O relógio do dispositivo deve estar correto.
- Atualiza a cada segundo e recalcula ao retornar à aba, sem acumular o atraso dos intervalos.
- Avisos para menos de 24 horas, 1 hora e 10 minutos, com destaque nos últimos 60 segundos.
- Ao zerar, para o contador e exibe a comemoração. Não escolhe nem revela automaticamente um dos nomes.
- A barra decorativa usa uma janela fixa entre 01/09/2026 às 10h e a revelação. Não reinicia quando alguém abre o site.
- Respeita a preferência de redução de movimento do dispositivo.

Para alterar datas, edite `TARGET` e `START` em `countdown.js` (os meses usam 1 a 12) e atualize também os textos em `index.html`.
