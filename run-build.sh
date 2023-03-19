#!/bin/sh

rm -rf lib
mkdir lib
cp src/IonIcon.js lib/IonIcon.js
wget https://github.com/ionic-team/ionicons/archive/$npm_package_ioniconsVersion.zip -O ionicons.zip
unzip -o ionicons.zip -d lib/
rm ionicons.zip

cd lib
commit_message=$(ls | grep -oP '(?<=ionicons-)(.+)')
cd ..

COMMIT_MESSAGE=$commit_message node src/build.js
rm -rf lib/ionicons-$commit_message

node esbuild.config.js
rm lib/iconList.json