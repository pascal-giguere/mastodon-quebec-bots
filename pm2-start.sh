#!/usr/bin/env bash

pm2 start yarn --interpreter bash --name mastodon-quebec-bots --log logs/pm2.log --time -- start
