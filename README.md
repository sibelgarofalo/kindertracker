# kindertracker

Kinder Tracker is a web and mobile application used by Swiss Primary schools to share content and communications with the student's families

[![.github/workflows/main.yml](https://github.com/sibelgarofalo/kindertracker/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sibelgarofalo/kindertracker/actions/workflows/main.yml)

## Getting started

The application is composed by two tiers:

 - Front-end built using React.js 18
 - Back-end built using Node.js Express

The two tiers are packaged using `docker` and hosted on Azure Containers.

### Run Front-end

The Front-end is built using `yarn` and you can run it and build it using the following steps:

 1. enter the folder `cd front-end`
 2. download the packages `yarn install`
 3. start the application on port 3000 `yarn start`
 4. open the application on [http://localhost:3000](http://localhost:3000)

### Run Back-end

The Back-end is built using `yarn` and you can run it and build it using the following steps:

 1. enter the folder `cd back-end`
 2. download the packages `yarn install`
 3. start the application on port 4000 `yarn start`
 4. open the application on [http://localhost:4000](http://localhost:4000)