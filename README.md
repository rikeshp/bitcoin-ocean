## Overview
BitcoinOcean is a web app that visualizes real time bitcoin transactions as ocean creatures. Shrimps represent tiny transactions (0 to 1 btc), 
Fish represent small transactions (1 to 10 btc), Sharks represent large transactions (10 to 50 btc), and Whales represent massive transactions (over 50 btc).

Used Blockchain.info WebSocket API to stream real time transaction data.

## Prerequisites

Install Node.js

`brew install node`

Install Express

`npm install express --save`

## Deploy on Heroku:

```
brew tap heroku/brew && brew install heroku
heroku login
git clone https://github.com/rikeshp/bitcoin-ocean.git
cd bitcoin-ocean
git init
git add .
git commit -am "My first commit"
heroku create
git push heroku master
```
