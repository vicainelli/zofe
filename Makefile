.PONY: all build deps image lint test

staging: ## deploy to staging
	rvm install 2.1.7
	rvm use 2.1.7 --fuzzy
	npm install
	bower install
	bundle install
	npm install -g grunt-cli
	npm install -g bower
	grunt build
	bash deploy/notification.bash
