#!/usr/bin/env bash

cd ..

docker build -t thiagosf/graphql -f Dockerfile .

docker-compose up -d
