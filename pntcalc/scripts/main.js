//This calculates the amount of paint you will need with rounding
length = prompt("What is the length of your ceiling?");
width = prompt("What is the width of your ceiling?");
squareFT = parseFloat(length * width);
numgal = squareFT/350;
totgal = Math.ceil(numgal);
document.write("You ceiling is "+squareFT+" square feet.  ");
document.write("You will need "+totgal+"  gallons of paint for your ceiling!");