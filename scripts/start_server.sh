#!/bin/bash
cd /var/www/html # Change to your application's directory
npm install
npm start > app.log 2>&1 &
