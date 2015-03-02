#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "master" ]]; then
  root_dir="/var/www/zofe.com.br/html"
elif [[ "$branch" = "staging" ]]; then
  root_dir="/var/www/staging.zofe.com.br/html"
else
  exit 0
fi

openssl aes-256-cbc -K $encrypted_e554a52af112_key -iv $encrypted_e554a52af112_iv -in secrets/private_key.enc -out secrets/private_key -d
chmod 600 secrets/private_key
ssh-keyscan -t rsa zofe.com.br >> ~/.ssh/known_hosts
chmod 600 ~/.ssh/known_hosts
scp -r -i secrets/private_key ./_site/* deploy@zofe.com.br:$root_dir
find $root_dir -type f -exec chmod 644 {} \;
find $root_dir -type d -exec chmod 775 {} \;
