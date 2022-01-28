interface hasPhone {
    name: string;
    phone: number;
}
interface hasEmail {
    name: string;
    email: string;
}
declare const contact: hasPhone & hasEmail;
declare type strOrNum = string | number;
declare let var1: strOrNum;
interface function1 {
    (para1: string, para2: number): void;
}
declare const function2: function1;
