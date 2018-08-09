#!/bin/sh
docker run --rm -v $(pwd):/srv -v $(pwd)/Caddyfile:/etc/Caddyfile -v $(pwd)/.caddy:/root/.caddy -p 443:443 -p 80:80 -e ACME_AGREE=true abiosoft/caddy