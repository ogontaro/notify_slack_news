# notify_slack_new_channel
電脳世界のAIがslackに新着チャンネルを通知するよ

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
$ serverless offline start
```

## deployment
```
$ serverless deploy --stage production
```
