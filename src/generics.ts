function identity<Type>(arg: Type): Type {
    return arg;
}

let output: string = identity<string>("Jeet");

function arrIdentity<Type>(arg: Type[]): Type[] {
    return arg;
}
function arrIdentity2<Type>(arg: Array<Type>): Array<Type> {
    return arg;
}
let output2: number[] = arrIdentity<number>([1,2,3,4]);
let output3: string[] = arrIdentity2<string>(['Hello','world']);

//interface
interface identity<Type>{
    (arg: Type): Type;
}
let myIdentity: identity<string> = identity;