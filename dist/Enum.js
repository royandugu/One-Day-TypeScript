"use strict";
var Size;
(function (Size) {
    Size[Size["First"] = 0] = "First";
    Size[Size["Second"] = 1] = "Second";
    Size[Size["Third"] = 2] = "Third";
})(Size || (Size = {}));
const value = Size.Second;
console.log(value);
const newValue = 1;
console.log(newValue);
//# sourceMappingURL=Enum.js.map