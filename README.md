There are two tasks that have done in this repository:

1- Develop a basic user interface in React, which should include a text field outlined in blue and a submit button. If the user inputs a valid integer into the text field and hits submit, an alert will display with the entered number. However, if the entered string is not an integer, the border of the text field will change to red and it will shake three times. In case the user persists in entering non-integer values (like a string with letters) and hits the submit button once more, the text field will repeat the shaking action.

2- Construct a mapping function that takes three parameters:

    a)A collection of values as an array
    b)An asynchronous function
    c)A number indicating the maximum concurrency

This function should traverse the array elements (given as the first argument), applying the provided asynchronous function (second argument) to each of them. The number of concurrent Promises executing at any given moment should not exceed the limit set by the third argument. The function should be versatile and operate with any type of values contained in the input array.

Additionally, develop a set of tests using a preferred testing framework that verifies the function's correct operation and adherence to the specified requirements.