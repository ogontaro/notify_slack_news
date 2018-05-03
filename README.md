# notify slack news
電脳世界のAIがslackに新着情報を通知するよ

[![CircleCI](https://circleci.com/gh/ogontaro/notify_slack_news.svg?style=svg)](https://circleci.com/gh/ogontaro/notify_slack_news)
[![Maintainability](https://api.codeclimate.com/v1/badges/7964824c89c5af836519/maintainability)](https://codeclimate.com/github/ogontaro/notify_slack_news/maintainability)

## requirement
- nodejs: 6.10
- [serverless](https://github.com/serverless/serverless): latest

## development
### set environment before development
```
$ cp .envrc.sample .envrc
$ vi .envrc 
$ cp config/development.yml.sample config/development.yml
$ cp config/production.yml.sample  config/production.yml
$ vi config/development.yml
$ vi config/production.yml
```

### start developent
```
$ yarn install
$ yarn run start
```

## deployment
```
$ yarn run deploy
```
