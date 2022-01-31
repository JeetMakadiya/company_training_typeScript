class Students{
    private fname: string;
    private lname: string;

    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return this.fname + " " + this.lname;
    }
}
let s1 = new Students('Jeet', 'Makadiya');
let s2 = new Students('Jeet2', 'Makadiya2');

console.log(s1.getFullName());
console.log(s2.getFullName());