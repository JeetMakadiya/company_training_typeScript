//interface
interface hasPhone {
    name: string;
    phone: number;
}

interface hasEmail{
    name: string;
    email: string;
}

const contact: hasPhone & hasEmail = {
    name: "jeet",
    email: "jeetmakadiya02@gmail.com",
    phone: 9090909090,
}

//type

type strOrNum = string | number;
let var1: strOrNum = "Jeet";
var1 = 5;

interface function1 {
    (para1: string, para2: number): void;
}

const function2: function1 = (arg1, arg2) => {
    
}
function2("jeet",5);