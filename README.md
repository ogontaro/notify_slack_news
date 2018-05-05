# notify slack news
電脳世界のAIがslackに新着情報を通知するよ

[![CircleCI](https://circleci.com/gh/ogontaro/notify_slack_news.svg?style=svg)](https://circleci.com/gh/ogontaro/notify_slack_news)
[![Maintainability](https://api.codeclimate.com/v1/badges/7964824c89c5af836519/maintainability)](https://codeclimate.com/github/ogontaro/notify_slack_news/maintainability)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

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

### lint
```
$ yarn run lint
```

## deployment
```
$ yarn run deploy
```


Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

