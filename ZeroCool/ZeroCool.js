/**
@author Jay Peterson
7/25/2019
ZeroCool- Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Zero" instead of the number and for the multiples of five print "Cool".
For numbers which are multiples of both three and five print "ZeroCool".
This should be written in Javascript and be able to run in the console.
**/

for (var i = 1; i <= 100; i++)  //count from 1 to 100
{
    if ((i % 3 === 0) && (i % 5 === 0)) //check if number is multiple of 5 and 3
    {
        console.log("ZeroCool");
    }
    else if (i % 3 === 0)   //check if number is multiple of 3
    {
        console.log("Zero");
    }
    else if (i % 5 === 0)   //check if number is multiple of 5
    {
        console.log("Cool");
    }
    else    //number is not a multiple of 5 or 3
    {
        console.log(i);
    }
}