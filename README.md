# **CYPRESS AUTOMATION TESTS**

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Krosav4eg/Cypress-Automation_tests/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Krosav4eg/Cypress-Automation_tests/tree/master)

This automation framework contains tests which needed for testing of UI functionality
## **Tools**

Node JS v14.16.0 for running applications based on JS

Cypress framework version 12.12.0

## **Project Setup**
Clone this framework into required directory using command

git clone https://github.com/Krosav4eg/Cypress-Automation_tests.git

if you want to locally set up framework form scratch use these commands:

cd *PATH_TO/YOUR/LOCAL_FOLDER* and execute command *npm install cypress --save-dev*

## **Running the tests**
For automation tests running use the following commands which described in package.json file. 

- Use command *cy:run:all:tests:in:cloud* if you want run all tests with making a record in cypress dashboard.

After that you will receive information with detailed run statistics in **#automation-notification slack channel**.

- Lockal for running all tests use script *cypress:run*

- For running cypress GUI use script *cypress:open*


`**Couple words about CYPRESS GUI. These GUI necessary for visual running of automation tests and it can be useful for 
debugging** ` 

## **Reporting**

For lockal run and using mochawesome report use following commands:

*cypress:clean:mochawesome-report:folder*

*cy:generate:mocha:report*

*cy:merge:mocha:report*

*cypress:generate:mocha:report*

Final report will be generated in folder **_`mochawesome-report`_**