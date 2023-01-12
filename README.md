![SPARS Logo](./spars-logo.png?raw=true "Not Affiliated with SPARS")

# SPARS CSV Batch Upload Formatter

## Description

A small Node.js application that converts MongoDB client documents to a CSV file format.

## Installation

Ensure that you have at least version @16 of node installed
Ensure you have an up to date version of VS Code
Environment variables for this project are MONGODB_URI
Install dependencies

Node Package Manager

```
npm i
```

Yarn

```
yarn install
```

## Usage

Navigate to the main folder and run the command

```
node index.js
```

You'll then be prompted for the names of your csv files and the resulting files for your intake, followup, and discharge interviews will be generated.

## Known Issues

- Gathering client diagnosis from EHR system (currently only primary diagnosis are exported)

## Acknowledgements

- [Fast-CSV](https://c2fo.github.io/fast-csv/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme)
- [MongoDB Node.js Driver](https://github.com/mongodb/node-mongodb-native)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [SPARS CMHS]("https://spars.samhsa.gov/")

## Disclaimer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

1. This program is not officially affiliated with the SPARS, CMHS, CSAT, or any other governmental programs
2. Feel free to distribute or refactor this program as you see fit, if you have an amazing improvment, feel free to open a pull request
3. The .gitignore only currently will prevent files following the `test_intakes.csv` naming convention, ensure that you aren't pushing your client's information to your repo
