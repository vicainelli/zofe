.PONY: all build deps image lint test

staging: ## deploy to staging
	rvm install 2.1.7
	rvm use 2.1.7 --fuzzy
	npm install
	bundle install
	npm install -g grunt-cli
	grunt build
	bash deploy/notification.bash
