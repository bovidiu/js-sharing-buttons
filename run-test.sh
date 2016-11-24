#!/usr/bin/env bash

##Compile js
echo "Building JS"
./node_modules/typescript/bin/tsc

## Run tests
./node_modules/phantomjs/bin/phantomjs test/test.js