![Version](https://img.shields.io/badge/version-0.1.0-orange.svg)

# Hurem Basket App

## Installation

To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. `https://github.com/arcaglar/basket.git`
3. `yarn install`
4. `yarn serve`
5. Open your browser and visit <http://localhost:8080>

## Unit Test

Just run `yarn run test:unit`

## Deployment

This project deploying on master branch -> `https://hurem-basket.now.sh/`
If you want new deploying -> `git push origin master`

## Static Serve

Just run `npm start`

## Repo structure

Sometimes it’s helpful to know what all these different files are for

```
/
├─ src/
│  ├─ assets/                   # Assets
│  │  ├─ images/                # Images (used in component examples)
│  │  └─ stylesheet/            # SCSS files
│  │
│  ├─ components/               # Components
│  │  ├─ notification           # Global notification component
│  │  ├─ card                   # Product card component
│  │  ├─ header-shopping-cart   # Header shop cart component inside the header
│  │  └─ header                 # App header component
│  │
│  ├─ plugins/                  # Plugins
│  │  └─ axios                  # Axios configs
│  │
│  ├─ store/                    # Vuex
│  │  ├─ index                  # Vuex configs
│  │  ├─ global                 # Global state management
│  │  └─ order                  # Order connections
│  │
│  └─ router                    # Vue Router
│
├─ server                       # Node server file for zeit.co
│
├─ package.json                 # Project manifest
└─ README.md                    # This file
```
