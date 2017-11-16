# Technote demonstrating a Pusher.JS-based app that subscribes to remote Pusher events

This technote is intended for developers interested in learning more about the Pusher.com's API. This is not a complete tutorial. Instead, it brings a simple application with two NodeJS-based scripts: One for authentication purposes and other for the subscription function.

## Install

* npm install

## Get your app credentials

You will need to visit Pusher.com web service to get your app credentials. Once you get the data, make sure you edit the config-sample.json and rename it to config.json:

```
{
  "APP_ID"  : "REPLACE_APP_ID",
  "APP_KEY" : "REPLACE_APP_KEY",
  "SECRET"  : "REPLACE_APP_SECRET",
  "authEndpoint" : "REPLACE_YOUR_URL:5000/pusher/auth",
  "cluster" : "REPLACE_CLUSTER_NAME"
}
```
