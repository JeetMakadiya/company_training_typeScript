let var1: any = 10;
let var2: unknown = "jeet";

var1.obj1.key.value;
var2.obj2; //error

//any
async function fetchData(para: Promise<any>) {
    const val = await para;
    console.log(val);
}

//unknown
let a: unknown = 12;
let b: unknown = [1,2,3];
b = a;