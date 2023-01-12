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

Fast CSV
NPM Inquirer
MongoDB
Dotenv
