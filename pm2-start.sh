#!/usr/bin/env bash

pm2 start yarn --name mastodon-quebec-bots --log logs/pm2.log --time -- start --color
