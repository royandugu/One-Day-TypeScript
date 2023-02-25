const displayer = (numb : number) : number =>{
    if (numb === 0) return 0;
    else {
        console.log(numb);
        numb=numb-1;
        displayer(numb);
    }
    return 0;
}
displayer(10);

//const trying functions with multiple args

const adder = (a : number , b: number = 0): number =>{
    return a+b;
}
const addVal : number = adder(10);
console.log(addVal);