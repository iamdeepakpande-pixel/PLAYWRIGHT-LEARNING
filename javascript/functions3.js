
// function calling - callout 

// Import  keyword used to import functions from this file to another files

import {printInStar, printInHash , printInPercentile} from "./format-lib.js"

function printName(l, a, b, c) // here a= function variable
{
a(l);
b(l);
c(l);
}

printName("Vaibhav", printInStar, printInHash , printInPercentile);

