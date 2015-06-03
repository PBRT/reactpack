#!/bin/bash

webpack -p --config webpack.production.config.js
node server/server.js
