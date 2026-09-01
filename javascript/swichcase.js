// date format

// 1-1-2026
//1-jan-2026
//1-january-2026

// let monthName = "jan";
// let monthNumber=0;

// if(monthName === "jan" || monthName === "january")
// {
//   monthNumber = 1;
// }
// else if(monthName === "feb" || monthName === "february");
// {
//   monthNumber = 2;
// }



// switch case - only apply on equality check
// 1- default will run when no case matches
// break is mandatory

let monthName = "jan";
let monthNumber=0;

switch(monthName)
{
  case "jan":
   case "january":
   case "JAN":
    monthNumber = 1;
break;

  case "feb":
  case "february":
case "FEB":
    monthNumber = 2;
break;

default:
  monthNumber = -1;
  break;
}
