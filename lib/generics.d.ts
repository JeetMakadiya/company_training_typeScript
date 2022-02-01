declare function identity<Type>(arg: Type): Type;
declare let output: string;
declare function arrIdentity<Type>(arg: Type[]): Type[];
declare function arrIdentity2<Type>(arg: Array<Type>): Array<Type>;
declare let output2: number[];
declare let output3: string[];
interface identity<Type> {
    (arg: Type): Type;
}
declare let myIdentity: identity<string>;
