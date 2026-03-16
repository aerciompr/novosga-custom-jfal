# NOVOSGA Custom JFAL

Painel NOVOSGA customizado com identidade visual da Justiça Federal de Alagoas, com:
- Tema institucional (azul `#002F6C`, verde `#007A33`, cinza `#97999F`)
- Suporte a vídeo do YouTube (já nativo no painel)
- Vocalização de chamadas habilitada por padrão
- Logo da JFAL aplicada

## Estrutura

- `web.js`: bundle do painel com defaults ajustados para JFAL
- `static/css/app.css`: sobreposição de estilo institucional
- `static/images/logo.png`: logo da JFAL
- `Dockerfile`: imagem Nginx com painel estático
- `docker-compose.yml`: stack pronta para Portainer

## Deploy via Portainer (Git Repository)

1. Suba este conteúdo para um repositório público no GitHub.
2. No Portainer, vá em `Stacks` > `Add stack`.
3. Selecione `Repository`.
4. Informe:
   - `Repository URL`: URL do seu repositório GitHub
   - `Reference`: `refs/heads/main` (ou branch usada)
   - `Compose path`: `docker-compose.yml`
5. Em `Environment variables` (opcional):
   - `PORT=8088`
   - `TZ=America/Sao_Paulo`
6. Clique em `Deploy the stack`.

## Deploy via Portainer (Image pronta GHCR)

Este repositório publica automaticamente a imagem em:
- `ghcr.io/aerciompr/novosga-custom-jfal:latest`

No Portainer:
1. `Stacks` > `Add stack` > `Web editor`
2. Cole o conteúdo de `portainer-stack.yml`
3. Ajuste `PORT` se necessário e faça o deploy

## Configuração no painel

Após abrir o painel, acesse as configurações e ajuste:
- `Servidor`, `Usuário`, `Senha`, `Client ID`, `Client Secret`
- `Unidade` e `Serviços`
- `Vídeo ou Playlist` com URL do YouTube
- `Vocalizar` (já vem ativado por padrão)

## Build local (opcional)

```bash
docker compose up -d --build
```

Acesse em `http://SEU_HOST:8088`.
