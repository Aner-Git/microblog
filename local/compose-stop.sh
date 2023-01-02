#!/bin/sh

set -e
WA="webapp"

./compose.sh stop "$WA"
./compose.sh rm -f "$WA"
