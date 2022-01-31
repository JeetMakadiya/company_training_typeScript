class Students {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
        return this.fname + " " + this.lname;
    }
}
let s1 = new Students('Jeet', 'Makadiya');
let s2 = new Students('Jeet2', 'Makadiya2');
console.log(s1.getFullName());
console.log(s2.getFullName());
//# sourceMappingURL=classes.js.map