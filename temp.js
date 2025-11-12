// const buffer = new ArrayBuffer(16); 
// const view = new Uint8Array(buffer);
// view[0] = 255;
// view[1] = 128;

// console.log(view);




export class Animal {
    constructor(animal){
        this.animal = animal
    }

    async eat(){
        console.log(this.animal ,"is eating")
    }
}


class Lion extends Animal{
    constructor(name){
        super.eat()
        this.name = name
    }
}

let l = new Lion("shera")

l.eat()