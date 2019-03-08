"use strict";

// get the size of the array
var size = prompt("Enter size of the array");
size = +size;
var arr = [size];

// Get each element of the array and store it 
for(let i = 0; i < size; i++)
{
    arr[i] = prompt("index[" + i + "]");
}

// Get the value that is to be searched in the array
var key = prompt("Which element location you want to find?");


//  Assing the return value  of the function to the loc variable
let loc = lenearSearch(arr, key);


// Check if the value was found
if(loc !== -1)
    console.log("The value " + key + " is found at loc[" + loc + "]");
else
    console.log("The location of " + key + " is not found in the array");
    
    

/*
    This loop is used to keep track of each loc and it value
    You can Uncommented it if you want
 for(let i = 0; i < size; i++)
     console.log("index[" + i + "]:" + arr[i]);

*/

// This function implemet the lenear Search algorithm
function lenearSearch(array, key)
{
    var max = array.length;

    // Loop through each index of the array
    for(let i = 0; i < max; i++)
    {
        /* check if the i'th index value is eqaul to the target 
        value and return the index */
        if(array[i] == key) 
            return i;
    }

    // If the target value was not found in the array 
    return -1;
}