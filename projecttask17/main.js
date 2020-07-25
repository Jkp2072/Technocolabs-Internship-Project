class school{
    constructor(name,level,noofstudents) {
        this._name = name;
        this._level = level;
        this._noofstudents = noofstudents;
    }
    get name(){
        return this._name;
    }
    get level() {
        return this._level;
    }

    get noofstudents() {
        return this._noofstudents;
    }
    set noofstudents(newnoofstudents){
        if(typeof newnoofstudents === 'number')
        {
            this._noofstudents = newnoofstudents;
        }
        else
        {
            console.log('Invalid .Enter a number man!!!!!!!!!!!!!');
        }
    }

    quickfacts()
    {
        console.log(`${this.name} educates ${this.noofstudents} students at the ${this.level} school level.`);
    }

    static picksubteacher(substituteteacher)
    {
        const randomteacher=Math.floor(Math.random()*substituteteacher.length);
        return substituteteacher[randomteacher];
    }
}

class primaryschool extends school {
    constructor(name,noofstudents,pickuppolicy){
        super(name,'primary',noofstudents);
        this._pickuppolicy = pickuppolicy;

    }

    get pickuppolicy(){
        return this._pickuppolicy;
    }
}

class highschool extends school {
    constructor(name,noofstudents,sportsteam){
        super(name,'high',noofstudents);
        this._sportsteam = sportsteam;

    }

    get sportsteam(){
        return this._sportsteam;
    }
}


// now instances of above class.......



const lorraineHansbury = new primaryschool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickfacts();
console.log(' ');
school.picksubteacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alsmith = new highschool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);



// checking of all the properties of the classes
alsmith.quickfacts();
console.log(' ');
console.log(`${alsmith.sportsteam}`);
console.log(' ');
console.log(`${alsmith.noofstudents}`);

console.log(school.picksubteacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
