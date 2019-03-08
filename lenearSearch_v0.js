"use strict";

// Define the array and get the array length
var arr = [24, 50, 60, 70, 80, 10, 2, 5],
size = arr.length;

// Get the Element to be search in the array
var key = 5;

// Get the value return from the this function
var loc = lenearSearch(arr, size, key);

// Display the loc if the target value was found 
if(loc !== -1)
{
    console.log("The element " + key + " is found at loc[" + loc + "]");
}
else
{
    console.log("The element " + key + " was not found in the array");
}

// Implement the Lenear Search algorithm
function lenearSearch(array, size, target)
{
    // Get the first index of the array
    let loc = 0;

    // Cycle the each index in the array
    while(loc < size)
    {
        // Check if the loc index  is eqaul to the target value
        if(array[loc] === target)
        {
            return loc;
        }
        // Point the loc variable to the next index
        loc++;
    }

    // If the target value was not found then
    return -1;
}
