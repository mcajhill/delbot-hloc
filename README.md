# delbot-hloc

## Description

This project is designed to pull the following candlestick price information for Delbot to consume:
* Highest price (H)
* Lowest price (L)
* Opening price (0)
* Closing price (C)
* Volume of shares/currency traded during the candlestick period

## How to install

### Prerequisites

Follow the documentation in the links to install the following tools:

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/lang/en/)

### Setup

#### Configure

1. `$ cp .env.template .env.dev`
2. Replace the values to match the environment

#### Install

1. ` $ nvm use`
2. ` $ yarn`

### Running tests

#### Unit tests

`$ yarn test:unit`

#### Integration tests

`$ yarn test:integration`

#### Entire test suite

`$ yarn test`
