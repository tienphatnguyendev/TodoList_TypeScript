"use strict";
// Generic functions
function addElement(a, b) {
    let sum = undefined;
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    else
        return (Number(a) + Number(b)).toString();
}
console.log("result: ", addElement("3", "3"));
