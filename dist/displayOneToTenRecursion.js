"use strict";
const displayer = (numb) => {
    if (numb === 0)
        return 0;
    else {
        console.log(numb);
        numb = numb - 1;
        displayer(numb);
    }
    return 0;
};
displayer(10);
const adder = (a, b = 0) => {
    return a + b;
};
const addVal = adder(10);
console.log(addVal);
//# sourceMappingURL=displayOneToTenRecursion.js.map