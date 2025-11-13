// const buffer = new ArrayBuffer(16); 
// const view = new Uint8Array(buffer);
// view[0] = 255;
// view[1] = 128;

// console.log(view);




export class Animal {
    constructor(animal){
        this.animal = animal
    }

    eat(){
        console.log(this.animal ,"is eating")
    }
}



let f = new Animal("lion")
f.eat()