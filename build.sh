#!/usr/bin/env bash

tsc
tsc -p jsconfig.json
if [ "$2" = "debug" ]; then
    cd web 
    uglifyjs alienzone.js -c -m -o alienzone.min.js
fi
