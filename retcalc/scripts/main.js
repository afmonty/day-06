//This is a retirement age calculator

agenow = prompt("How old are you?");
retireage = prompt("At what age do you want to retire?");
year = parseFloat(retireage - agenow);
var d = new Date();
y = (d.getFullYear());
console.log("You have "+year+" years left until you want to retire.");
console.log("<div>It is "+y+" , so you can retire in "+(y+year)+".</div>");