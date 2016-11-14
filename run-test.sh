#!/usr/bin/env bash

##Compile js
echo "Building JS"
./node_modules/typescript/bin/tsc

##copy files over
echo "Copy scripts over"
cp dist/SocialMedia.js test/browser/

## Run tests
echo "Page loading time test  "
./node_modules/phantomjs/bin/phantomjs test/pageloader.js http://127.0.0.1:8080

echo "Starting tests"
./node_modules/phantomjs/bin/phantomjs test/test.js