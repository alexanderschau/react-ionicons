#!/bin/sh

yarn build-typescript
wget https://github.com/ionic-team/ionicons/archive/$npm_package_ioniconsVersion.zip -O ionicons.zip
unzip -o ionicons.zip -d lib/
rm ionicons.zip

cd lib
commit_message=$(ls | grep -oP '(?<=ionicons-)(.+)')
cd ..

COMMIT_MESSAGE=$commit_message node lib/build.js
rm -rf lib/ionicons-$commit_message