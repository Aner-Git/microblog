#!/bin/sh

set -e

DOCKER_BUILDKIT=1 docker-compose \
--project-name=react_app \
--project-directory=.. \
--file=./docker-compose.yml \
"$@"
