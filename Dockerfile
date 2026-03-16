FROM nginx:1.27-alpine

# Copia o painel customizado
COPY . /usr/share/nginx/html

# Healthcheck simples
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

EXPOSE 80
