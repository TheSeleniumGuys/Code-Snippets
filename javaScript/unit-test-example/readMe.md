#JavaScript Unit Test Example#

##About##
This is a simple example of how to place unit tests alongside your code. Please note this is just to demostrate how easy it is to have unit tests parallel to production files/code and not meant to be a 'robust' model.

There are three files:

###simple-calc.html###
This is the page that would go live along side its JavaScript. It allows a user to enter 2 numbers then an operand, so that a calculation can be performed. It calls the **getValues()** function first to get the data from teh user then calls **calculate()** to carry out the calculation.

###calcScript.js###
This file has the two functions **getValues()** and **calculate(num1, num2, op)**. These ask the user for and store the values, then use them to run the calculation.

###simple-calc-unit-test.html###
The test file contains hard coded Examples that demonstrate the required functionality the production code should provide. These call the calculate() function and provide set test data to the function.

##TDD##
In order to take a TDD approach to designing and developing the functionality of Simple Calc, we can write a set of tests in a parallel file then implement the code to make them pass. If functionality is changed, the tests should break.

##Improvements##
1. Get the results to print to the page with document.write
2. Store the results of each test and do a comparison against expected results (e.g. BDD type Expectations)
3. Add in 1 or more negative test cases
