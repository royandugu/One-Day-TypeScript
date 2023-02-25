const adderOrConcatinator = (value1 : number|string , value2 : number|string) : number|string =>{
    if (typeof value1 === "number" && typeof value2 === "number") return value1+value2;
    else if(typeof value1 === "string" && typeof value2 === "string") return value1+value2;
    else return 0; 
}
const firstTerm = adderOrConcatinator(1,2);
const secondTerm=adderOrConcatinator("a","b");

console.log("If both are numbers " + firstTerm);
console.log("If both are strings " + secondTerm);