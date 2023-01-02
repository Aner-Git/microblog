#!/bin/sh

if [ -z "$1" ]; then
    echo "username param required"
    return 1
fi

echo "BOOT_ENV=local-$1" > .env