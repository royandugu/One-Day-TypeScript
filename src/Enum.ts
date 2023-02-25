enum Size{First,Second,Third}
const value : Size = Size.Second;
console.log(value);

//generating more optmized code
const enum OptmizedSize {First,Second, Third}
const newValue : OptmizedSize = OptmizedSize.Second
console.log(newValue)