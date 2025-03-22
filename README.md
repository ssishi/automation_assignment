# Project Automation README

This is an Automation project, written in Typescript, and Playwright. It requires one to run the Weather App, and the Smartphone API Service developed in C#. Follow the instructions to install dependencies, run the tests and produce a report.

Also, there's test cases as well. A file called `TEST_CASES.md` should contain all test cases designed to automate the project.

## Table of Contents

1. [The Weather App](#the-weather-app)
2. [The Smartphone API](#the-smartphone-api)
3. [Playwright Tests](#playwright-tests)

---

## The Weather App

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the Weather App directory:
   ```bash
   cd WeatherApp
   ```
2. Setup tools for Python:
   - Create and activate a virtual environment:
     ```bash
     python -m venv .venv
     source .venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install setuptools:
     ```bash
     python3 -m ensurepip
     python3 -m pip install setuptools
     ```
3. Install node dependencies:
   ```bash
   yarn
   ```

### Running the App

1. Start the development server:
   ```bash
   yarn run start
   ```
2. Open your browser and navigate to `http://localhost:3000/React-WeatherApp`.

---

## The Smartphone API

### Prerequisites

- Specifically dotnet 8

### Installation

1. Navigate to the Smartphone API directory:
   ```bash
   cd SmartphoneAPI/
   ```

### Running the API

1. Start the API server:
   ```bash
   dotnet run
   ```
2. The API will be available at `http://localhost:5000`.
3. The swagger interface will be at `http://localhost:5001/swagger`

---

## Playwright Tests

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the Playwright tests directory:
   ```bash
   cd playwright-tests
   ```
2. Install dependencies:
   ```bash
   yarn
   ```
3. Install Playwright browsers:
   ```bash
   yarn playwright install
   ```

### Running the Tests

1. Execute the tests:
   ```bash
   yarn playwright test
   ```
2. View the test report:
   ```bash
   npx playwright show-report
   ```
