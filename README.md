# Volume Server

## Installation

* Ensure nodejs & npm is installed
* Clone repository: `git clone http://github.com/ollyhayes/volume-server`
* Install dependencies: `npm install`
* Start server: `npm run start`

## Operation

Using curl:

* Turn volume up: `curl -X POST http://localhost:3000/volume-up`
* Turn volume down: `curl -X POST http://localhost:3000/volume-down`