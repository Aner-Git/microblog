#!/bin/sh

set -e


./compose.sh \
up \
-d \
--remove-orphans \
"$@"

./compose-logs.sh
